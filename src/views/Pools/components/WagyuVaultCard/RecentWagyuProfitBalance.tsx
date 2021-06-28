import React from 'react'
import { Text, TooltipText, useTooltip } from '@wagyu-swap-libs/uikit'
import { useTranslation } from 'contexts/Localization'
import Balance from 'components/Balance'

interface RecentWagyuProfitBalanceProps {
  wagyuToDisplay: number
  dollarValueToDisplay: number
  dateStringToDisplay: string
}

const RecentWagyuProfitBalance: React.FC<RecentWagyuProfitBalanceProps> = ({
  wagyuToDisplay,
  dollarValueToDisplay,
  dateStringToDisplay,
}) => {
  const { t } = useTranslation()

  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    <>
      <Balance fontSize="16px" value={wagyuToDisplay} decimals={3} bold unit=" WAGYU" />
      <Balance fontSize="16px" value={dollarValueToDisplay} decimals={2} bold prefix="~$" />
      {t('Earned since your last action')}
      <Text>{dateStringToDisplay}</Text>
    </>,
    {
      placement: 'bottom-end',
    },
  )

  return (
    <>
      {tooltipVisible && tooltip}
      <TooltipText ref={targetRef} small>
        <Balance fontSize="14px" value={wagyuToDisplay} />
      </TooltipText>
    </>
  )
}

export default RecentWagyuProfitBalance
