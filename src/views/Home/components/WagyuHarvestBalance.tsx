import React from 'react'
import { Text } from '@wagyu-swap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import BigNumber from 'bignumber.js'
import { useTranslation } from 'contexts/Localization'
import useAllEarnings from 'hooks/useAllEarnings'
import { usePriceWagyuVusdt } from 'state/hooks'
import styled from 'styled-components'
import { DEFAULT_TOKEN_DECIMAL } from 'config'
import CardValue from './CardValue'
import CardVusdtValue from './CardVusdtValue'

const Block = styled.div`
  margin-bottom: 24px;
`

const WagyuHarvestBalance = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const allEarnings = useAllEarnings()
  const earningsSum = allEarnings.reduce((accum, earning) => {
    const earningNumber = new BigNumber(earning)
    if (earningNumber.eq(0)) {
      return accum
    }
    return accum + earningNumber.div(DEFAULT_TOKEN_DECIMAL).toNumber()
  }, 0)
  const wagyuPriceUsd = usePriceWagyuVusdt()
  const earningsVusdt = new BigNumber(earningsSum).multipliedBy(wagyuPriceUsd).toNumber()

  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: '76px' }}>
        {t('Locked')}
      </Text>
    )
  }

  return (
    <Block>
      <CardValue value={earningsSum} lineHeight="1.5" />
      {wagyuPriceUsd.gt(0) && <CardVusdtValue value={earningsVusdt} />}
    </Block>
  )
}

export default WagyuHarvestBalance
