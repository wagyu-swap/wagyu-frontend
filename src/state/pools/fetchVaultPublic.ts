import BigNumber from 'bignumber.js'
import { convertSharesToWagyu } from 'views/Pools/helpers'
import { getWagyuVaultContract } from 'utils/contractHelpers'
import makeBatchRequest from 'utils/makeBatchRequest'

const wagyuVaultContract = getWagyuVaultContract()

export const fetchPublicVaultData = async () => {
  try {
    const [sharePrice, shares, estimatedWagyuBountyReward, totalPendingWagyuHarvest] = await makeBatchRequest([
      wagyuVaultContract.methods.getPricePerFullShare().call,
      wagyuVaultContract.methods.totalShares().call,
      wagyuVaultContract.methods.calculateHarvestWagyuRewards().call,
      wagyuVaultContract.methods.calculateTotalPendingWagyuRewards().call,
    ])
    const totalSharesAsBigNumber = new BigNumber(shares as string)
    const sharePriceAsBigNumber = new BigNumber(sharePrice as string)
    const totalWagyuInVaultEstimate = convertSharesToWagyu(totalSharesAsBigNumber, sharePriceAsBigNumber)
    return {
      totalShares: totalSharesAsBigNumber.toJSON(),
      pricePerFullShare: sharePriceAsBigNumber.toJSON(),
      totalWagyuInVault: totalWagyuInVaultEstimate.wagyuAsBigNumber.toJSON(),
      estimatedWagyuBountyReward: new BigNumber(estimatedWagyuBountyReward as string).toJSON(),
      totalPendingWagyuHarvest: new BigNumber(totalPendingWagyuHarvest as string).toJSON(),
    }
  } catch (error) {
    return {
      totalShares: null,
      pricePerFullShare: null,
      totalWagyuInVault: null,
      estimatedWagyuBountyReward: null,
      totalPendingWagyuHarvest: null,
    }
  }
}

export const fetchVaultFees = async () => {
  try {
    const [performanceFee, callFee, withdrawalFee, withdrawalFeePeriod] = await makeBatchRequest([
      wagyuVaultContract.methods.performanceFee().call,
      wagyuVaultContract.methods.callFee().call,
      wagyuVaultContract.methods.withdrawFee().call,
      wagyuVaultContract.methods.withdrawFeePeriod().call,
    ])
    return {
      performanceFee: parseInt(performanceFee as string, 10),
      callFee: parseInt(callFee as string, 10),
      withdrawalFee: parseInt(withdrawalFee as string, 10),
      withdrawalFeePeriod: parseInt(withdrawalFeePeriod as string, 10),
    }
  } catch (error) {
    return {
      performanceFee: null,
      callFee: null,
      withdrawalFee: null,
      withdrawalFeePeriod: null,
    }
  }
}

export default fetchPublicVaultData
