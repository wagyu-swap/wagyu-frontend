import React from 'react'
import { Text } from '@wagyu-swap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import useTokenBalance from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { getCakeAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import { usePriceWagyuBusd } from 'state/hooks'
import { BigNumber } from 'bignumber.js'
import CardValue from './CardValue'
import CardBusdValue from './CardBusdValue'

const WagyuWalletBalance = () => {
  const { t } = useTranslation()
  const { balance: wagyuBalance } = useTokenBalance(getCakeAddress())
  const wagyuPriceBusd = usePriceWagyuBusd()
  const busdBalance = new BigNumber(getBalanceNumber(wagyuBalance)).multipliedBy(wagyuPriceBusd).toNumber()
  const { account } = useWeb3React()

  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: '54px' }}>
        {t('Locked')}
      </Text>
    )
  }

  return (
    <>
      <CardValue value={getBalanceNumber(wagyuBalance)} decimals={4} fontSize="24px" lineHeight="36px" />
      {wagyuPriceBusd.gt(0) ? <CardBusdValue value={busdBalance} /> : <br />}
    </>
  )
}

export default WagyuWalletBalance
