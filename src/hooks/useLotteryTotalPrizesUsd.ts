import { usePriceWagyuVusdt } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalRewards } from './useTickets'

const useLotteryTotalPrizesUsd = () => {
  const totalRewards = useTotalRewards()
  const totalWagyu = getBalanceNumber(totalRewards)
  const wagyuPriceVusdt = usePriceWagyuVusdt()

  return totalWagyu * wagyuPriceVusdt.toNumber()
}

export default useLotteryTotalPrizesUsd
