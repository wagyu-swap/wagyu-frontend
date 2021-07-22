import BigNumber from 'bignumber.js'
import { getWagyuAddress } from 'utils/addressHelpers'
import useTokenBalance from './useTokenBalance'

/**
 * A hook to check if a wallet's WAGYU balance is at least the amount passed in
 */
const useHasWagyuBalance = (minimumBalance: BigNumber) => {
  const { balance: wagyuBalance } = useTokenBalance(getWagyuAddress())
  return wagyuBalance.gte(minimumBalance)
}

export default useHasWagyuBalance
