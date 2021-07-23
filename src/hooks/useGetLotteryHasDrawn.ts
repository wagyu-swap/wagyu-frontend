import { useEffect, useState } from 'react'
import { useLottery } from 'hooks/useContract'
import { getLotteryStatus } from 'utils/lotteryUtils'

/**
 * Returns whether or not the current lottery has drawn numbers
 *
 * @return {Boolean}
 */
const useGetLotteryHasDrawn = () => {
  const [lotteryHasDrawn, setLotteryHasDrawn] = useState(true)
  const lotteryContract = useLottery()

  useEffect(() => {
    let isSubscribed = true
    if (lotteryContract) {
      const fetchLotteryStatus = async () => {
        const state = await getLotteryStatus(lotteryContract)
        if (isSubscribed) {
          setLotteryHasDrawn(state)
        }
      }
      fetchLotteryStatus().then()
    }
    return() => {
      isSubscribed = false;
    }
  }, [lotteryContract])

  return lotteryHasDrawn
}

export default useGetLotteryHasDrawn
