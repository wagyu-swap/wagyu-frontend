import React from 'react'
import { Flex, Text, IconButton, AddIcon, MinusIcon, useModal, Skeleton } from '@wagyu-swap-libs/uikit'
import BigNumber from 'bignumber.js'
import { getBalanceNumber } from 'utils/formatBalance'
import { Pool } from 'state/types'
import { useWagyuVault, usePriceWagyuVusdt } from 'state/hooks'
import Balance from 'components/Balance'
import NotEnoughTokensModal from '../../PoolCard/Modals/NotEnoughTokensModal'
import { convertSharesToWagyu } from '../../../helpers'
import VaultStakeModal from '../VaultStakeModal'

interface HasStakeActionProps {
  pool: Pool
  stakingTokenBalance: BigNumber
}

const HasSharesActions: React.FC<HasStakeActionProps> = ({ pool, stakingTokenBalance }) => {
  const {
    userData: { userShares },
    pricePerFullShare,
  } = useWagyuVault()
  const { stakingToken } = pool
  const { wagyuAsBigNumber, wagyuAsNumberBalance } = convertSharesToWagyu(userShares, pricePerFullShare)
  const wagyuPriceVusdt = usePriceWagyuVusdt()
  const stakedDollarValue = wagyuPriceVusdt.gt(0)
    ? getBalanceNumber(wagyuAsBigNumber.multipliedBy(wagyuPriceVusdt), stakingToken.decimals)
    : 0

  const [onPresentTokenRequired] = useModal(<NotEnoughTokensModal tokenSymbol={stakingToken.symbol} />)
  const [onPresentStake] = useModal(<VaultStakeModal stakingMax={stakingTokenBalance} pool={pool} />)
  const [onPresentUnstake] = useModal(<VaultStakeModal stakingMax={wagyuAsBigNumber} pool={pool} isRemovingStake />)

  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Flex flexDirection="column">
        <Balance fontSize="20px" bold value={wagyuAsNumberBalance} decimals={5} />
        <Text fontSize="12px" color="textSubtle">
          {wagyuPriceVusdt.gt(0) ? (
            <Balance value={stakedDollarValue} fontSize="12px" color="textSubtle" decimals={2} prefix="~" unit=" USD" />
          ) : (
            <Skeleton mt="1px" height={16} width={64} />
          )}
        </Text>
      </Flex>
      <Flex>
        <IconButton variant="secondary" onClick={onPresentUnstake} mr="6px">
          <MinusIcon color="primary" width="24px" />
        </IconButton>
        <IconButton variant="secondary" onClick={stakingTokenBalance.gt(0) ? onPresentStake : onPresentTokenRequired}>
          <AddIcon color="primary" width="24px" height="24px" />
        </IconButton>
      </Flex>
    </Flex>
  )
}

export default HasSharesActions
