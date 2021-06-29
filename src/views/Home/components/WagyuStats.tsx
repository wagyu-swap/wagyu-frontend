import React from 'react'
import { Card, CardBody, Heading, Text } from '@wagyu-swap-libs/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance, useWagyuPerBlock } from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { getWagyuAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'

const StyledWagyuStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const WagyuStats = () => {
  const { t } = useTranslation()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getWagyuAddress()))
  const wagyuSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0
  const amountPerBlock = useWagyuPerBlock()
  const wagyuPerBlock = amountPerBlock ? getBalanceNumber(amountPerBlock) : 0;

  return (
    <StyledWagyuStats>
      <CardBody>
        <Heading scale="xl" mb="24px">
          {t('Wagyu Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{t('Total Wagyu Supply')}</Text>
          {wagyuSupply && <CardValue fontSize="14px" value={wagyuSupply} />}
        </Row>
        <Row>
          <Text fontSize="14px">{t('Total Wagyu Burned')}</Text>
          <CardValue fontSize="14px" decimals={0} value={burnedBalance} />
        </Row>
        <Row>
          <Text fontSize="14px">{t('New Wagyu/block')}</Text>
          <CardValue fontSize="14px" decimals={3} value={wagyuPerBlock} />
        </Row>
      </CardBody>
    </StyledWagyuStats>
  )
}

export default WagyuStats
