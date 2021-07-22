import { useContext, useEffect, useState } from 'react'
import PastLotteryDataContext from 'contexts/PastLotteryDataContext'
import getLotteryRoundData, { DataResponse } from 'utils/getLotteryRoundData'

type GetRecentLotteryRoundDataReturn = {
  isLoading: boolean
  data: DataResponse
  mostRecentLotteryNumber: number
  error: any
}

const useGetRecentLotteryRoundData = (): GetRecentLotteryRoundDataReturn => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const { mostRecentLotteryNumber } = useContext(PastLotteryDataContext)

  useEffect(() => {
    let isSubscribed = true;
    const fetchRecentLotteryData = async () => {
      try {
        if (isSubscribed) {
          setIsLoading(true)
        }
        const roundData = await getLotteryRoundData(mostRecentLotteryNumber)
        if (isSubscribed) {
          setData(roundData)
        }
      } catch (err) {
        if (isSubscribed) {
          setError(err)
        }
      } finally {
        if (isSubscribed) {
          setIsLoading(false)
        }
      }
    }

    if (mostRecentLotteryNumber > 0) {
      fetchRecentLotteryData().then()
    }
    return() => {
      isSubscribed = false
    }
  }, [mostRecentLotteryNumber, setData, setIsLoading, setError])

  return { isLoading, data, mostRecentLotteryNumber, error }
}

export default useGetRecentLotteryRoundData
