import React from 'react'
import { getBalanceNumber } from 'utils/formatBalance'
import { usePriceWagyuBusd } from 'state/hooks'
import { Text } from '@wagyu-swap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import { BigNumber } from 'bignumber.js'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import CardValue from './CardValue'
import CardBusdValue from './CardBusdValue'

const Block = styled.div`
  margin-bottom: 24px;
`

interface CakeWinningsProps {
  claimAmount: BigNumber
}

const WagyuWinnings: React.FC<CakeWinningsProps> = ({ claimAmount }) => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const wagyuAmount = getBalanceNumber(claimAmount)
  const wagyuPriceBusd = usePriceWagyuBusd()
  const claimAmountBusd = new BigNumber(wagyuAmount).multipliedBy(wagyuPriceBusd).toNumber()

  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: '76px' }}>
        {t('Locked')}
      </Text>
    )
  }

  return (
    <Block>
      <CardValue value={wagyuAmount} lineHeight="1.5" />
      {wagyuPriceBusd.gt(0) && <CardBusdValue value={claimAmountBusd} decimals={2} />}
    </Block>
  )
}

export default WagyuWinnings
