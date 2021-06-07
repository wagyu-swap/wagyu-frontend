import { usePriceWagyuBusd } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalRewards } from './useTickets'

const useLotteryTotalPrizesUsd = () => {
  const totalRewards = useTotalRewards()
  const totalCake = getBalanceNumber(totalRewards)
  const wagyuPriceBusd = usePriceWagyuBusd()

  return totalCake * wagyuPriceBusd.toNumber()
}

export default useLotteryTotalPrizesUsd
