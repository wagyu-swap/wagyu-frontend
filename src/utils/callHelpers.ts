import BigNumber from 'bignumber.js'
import { DEFAULT_GAS_LIMIT, DEFAULT_TOKEN_DECIMAL } from 'config'
import { ethers } from 'ethers'
import { Pair, TokenAmount, Token } from '@wagyu-swap-libs/sdk'
import { getLpContract, getMasterchefContract } from 'utils/contractHelpers'
import farms from 'config/constants/farms'
import { getAddress, getWagyuAddress } from 'utils/addressHelpers'
import tokens from 'config/constants/tokens'
import pools from 'config/constants/pools'
import sousChefABI from 'config/abi/sousChef.json'
import multicall from './multicall'
import { getWeb3NoAccount } from './web3'
import { getBalanceAmount } from './formatBalance'
import { BIG_TEN, BIG_ZERO } from './bigNumber'

export const approve = async (lpContract, masterChefContract, account) => {
  return lpContract.methods
    .approve(masterChefContract.options.address, ethers.constants.MaxUint256)
    .send({ from: account })
}

export const stake = async (masterChefContract, pid, amount, account) => {
  if (pid === 0) {
    return masterChefContract.methods
      .enterStaking(new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString())
      .send({ from: account, gas: DEFAULT_GAS_LIMIT })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
  }

  return masterChefContract.methods
    .deposit(pid, new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString())
    .send({ from: account, gas: DEFAULT_GAS_LIMIT })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const sousStake = async (sousChefContract, amount, decimals = 18, account) => {
  return sousChefContract.methods
    .deposit(new BigNumber(amount).times(BIG_TEN.pow(decimals)).toString())
    .send({ from: account, gas: DEFAULT_GAS_LIMIT })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const sousStakeVlx = async (sousChefContract, amount, account) => {
  return sousChefContract.methods
    .deposit()
    .send({
      from: account,
      gas: DEFAULT_GAS_LIMIT,
      value: new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString(),
    })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const unstake = async (masterChefContract, pid, amount, account) => {
  if (pid === 0) {
    return masterChefContract.methods
      .leaveStaking(new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString())
      .send({ from: account, gas: DEFAULT_GAS_LIMIT })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
  }

  return masterChefContract.methods
    .withdraw(pid, new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString())
    .send({ from: account, gas: DEFAULT_GAS_LIMIT })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const sousUnstake = async (sousChefContract, amount, decimals, account) => {
  return sousChefContract.methods
    .withdraw(new BigNumber(amount).times(BIG_TEN.pow(decimals)).toString())
    .send({ from: account, gas: DEFAULT_GAS_LIMIT })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const sousEmergencyUnstake = async (sousChefContract, account) => {
  return sousChefContract.methods
    .emergencyWithdraw()
    .send({ from: account })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const harvest = async (masterChefContract, pid, account) => {
  if (pid === 0) {
    return masterChefContract.methods
      .leaveStaking('0')
      .send({ from: account, gas: DEFAULT_GAS_LIMIT })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
  }

  return masterChefContract.methods
    .deposit(pid, '0')
    .send({ from: account, gas: DEFAULT_GAS_LIMIT })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const soushHarvest = async (sousChefContract, account) => {
  return sousChefContract.methods
    .deposit('0')
    .send({ from: account, gas: DEFAULT_GAS_LIMIT })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const soushHarvestVlx = async (sousChefContract, account) => {
  return sousChefContract.methods
    .deposit()
    .send({ from: account, gas: DEFAULT_GAS_LIMIT, value: BIG_ZERO })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10)
const wagyuVlxPid = 1
const wagyuVlxFarm = farms.find((farm) => farm.pid === wagyuVlxPid)

const WAGYU_TOKEN = new Token(chainId, getWagyuAddress(), 18)
const WVLX_TOKEN = new Token(chainId, tokens.wvlx.address[chainId], 18)
const WAGYU_VLX_TOKEN = new Token(chainId, getAddress(wagyuVlxFarm.lpAddresses), 18)

/**
 * Returns the total WAGYU staked in the WAGYU-VLX LP
 */
export const getUserStakeInWagyuVlxLp = async (account: string, block?: number) => {
  try {
    const masterContract = getMasterchefContract()
    const wagyuVlxContract = getLpContract(getAddress(wagyuVlxFarm.lpAddresses))
    const totalSupplyLP = await wagyuVlxContract.methods.totalSupply().call(undefined, block)
    const reservesLP = await wagyuVlxContract.methods.getReserves().call(undefined, block)
    const wagyuVlxBalance = await masterContract.methods.userInfo(wagyuVlxPid, account).call(undefined, block)

    const pair: Pair = new Pair(
      new TokenAmount(WAGYU_TOKEN, reservesLP._reserve0.toString()),
      new TokenAmount(WVLX_TOKEN, reservesLP._reserve1.toString()),
    )
    const wagyuLPBalance = pair.getLiquidityValue(
      pair.token0,
      new TokenAmount(WAGYU_VLX_TOKEN, totalSupplyLP.toString()),
      new TokenAmount(WAGYU_VLX_TOKEN, wagyuVlxBalance.amount.toString()),
      false,
    )

    return wagyuLPBalance.toSignificant(18)
  } catch (error) {
    console.error(`WAGYU-VLX LP error: ${error}`)
    return 0
  }
}

/**
 * Gets the wagyu staked in the main pool
 */
export const getUserStakeInWagyuPool = async (account: string, block?: number) => {
  try {
    const masterContract = getMasterchefContract()
    const response = await masterContract.methods.userInfo(0, account).call(undefined, block)

    return getBalanceAmount(new BigNumber(response.amount)).toNumber()
  } catch (error) {
    console.error('Error getting stake in WAGYU pool', error)
    return 0
  }
}

/**
 * Returns total staked value of active pools
 */
export const getUserStakeInPools = async (account: string) => {
  try {
    const web3 = getWeb3NoAccount()
    const eligiblePools = pools
      .filter((pool) => pool.sousId !== 0)
      .filter((pool) => pool.isFinished === false || pool.isFinished === undefined)

    // Get the ending block is eligible pools
    const calls = eligiblePools.map((eligiblePool) => ({
      address: getAddress(eligiblePool.contractAddress),
      name: 'bonusEndBlock',
    }))
    const currentBlock = await web3.eth.getBlockNumber()
    const ends = await multicall(sousChefABI, calls)

    // Filter out pools that have ended
    const activePools = eligiblePools.filter((eligiblePool, index) => {
      const endBlock = new BigNumber(ends[index])
      return endBlock.gt(currentBlock)
    })

    // Get the user info of each pool
    const userInfoCalls = activePools.map((activePool) => ({
      address: getAddress(activePool.contractAddress),
      name: 'userInfo',
      params: [account],
    }))
    const userInfos = await multicall(sousChefABI, userInfoCalls)

    return userInfos
      .reduce((accum: BigNumber, userInfo) => {
        return accum.plus(new BigNumber(userInfo.amount._hex))
      }, new BigNumber(0))
      .toNumber()
  } catch (error) {
    console.error('Coult not fetch staked value in pools', error)
    return 0
  }
}
