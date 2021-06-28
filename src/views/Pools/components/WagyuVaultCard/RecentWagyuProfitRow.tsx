import React from 'react'
import { Flex, Text } from '@wagyu-swap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import { useWagyuVault, usePriceWagyuVusdt } from 'state/hooks'
import { getWagyuVaultEarnings } from 'views/Pools/helpers'
import RecentWagyuProfitBalance from './RecentWagyuProfitBalance'

const RecentWagyuProfitCountdownRow = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const {
    pricePerFullShare,
    userData: { wagyuAtLastUserAction, userShares, lastUserActionTime },
  } = useWagyuVault()
  const wagyuPriceVusdt = usePriceWagyuVusdt()
  const { hasAutoEarnings, autoWagyuToDisplay, autoUsdToDisplay } = getWagyuVaultEarnings(
    account,
    wagyuAtLastUserAction,
    userShares,
    pricePerFullShare,
    wagyuPriceVusdt.toNumber(),
  )

  const lastActionInMs = lastUserActionTime && parseInt(lastUserActionTime) * 1000
  const dateTimeLastAction = new Date(lastActionInMs)
  const dateStringToDisplay = dateTimeLastAction.toLocaleString()

  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Text fontSize="14px">{`${t('Recent WAGYU profit')}:`}</Text>
      {hasAutoEarnings && (
        <RecentWagyuProfitBalance
          wagyuToDisplay={autoWagyuToDisplay}
          dollarValueToDisplay={autoUsdToDisplay}
          dateStringToDisplay={dateStringToDisplay}
        />
      )}
    </Flex>
  )
}

export default RecentWagyuProfitCountdownRow
