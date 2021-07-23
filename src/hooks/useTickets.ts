import { useCallback, useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import BigNumber from 'bignumber.js'
import { useLottery, useLotteryTicket } from 'hooks/useContract'
import { BIG_ZERO } from 'utils/bigNumber'
import useRefresh from './useRefresh'
import {
  getTotalRewards,
  getTotalClaim,
  getMatchingRewardLength,
  getWinningNumbers,
  getTickets,
} from '../utils/lotteryUtils'
import useLastUpdated from './useLastUpdated'

const useTickets = (lotteryNumber = null) => {
  const [tickets, setTickets] = useState([])
  const { account } = useWeb3React()
  const ticketsContract = useLotteryTicket()
  const lotteryContract = useLottery()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    let isSubscribed = true
    const fetchBalance = async () => {
      const res = await getTickets(lotteryContract, ticketsContract, account, lotteryNumber)
      if (isSubscribed) {
        setTickets(res)
      }
    }
    if (account && lotteryContract && ticketsContract) {
      fetchBalance().then()
    }
    return() => {
      isSubscribed = false
    }
  }, [account, lotteryContract, ticketsContract, fastRefresh, lotteryNumber])

  return tickets
}

export const useTotalRewards = () => {
  const [rewards, setRewards] = useState(BIG_ZERO)
  const lotteryContract = useLottery()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    let isSubscribed = true
    const fetchBalance = async () => {
      const res = await getTotalRewards(lotteryContract)
      if (isSubscribed) {
        setRewards(new BigNumber(res))
      }
    }

    if (lotteryContract) {
      fetchBalance().then()
    }

    return() => {
      isSubscribed = false;
    }
  }, [lotteryContract, fastRefresh])

  return rewards
}

export const useTotalClaim = () => {
  const [claimAmount, setClaimAmount] = useState(BIG_ZERO)
  const [claimLoading, setClaimLoading] = useState(false)
  const { account } = useWeb3React()
  const ticketsContract = useLotteryTicket()
  const lotteryContract = useLottery()
  const { lastUpdated, setLastUpdated } = useLastUpdated()

  useEffect(() => {
    let isSubscribed = true
    const fetchBalance = async () => {
      if (isSubscribed) {
        setClaimLoading(true)
      }
      const claim = await getTotalClaim(lotteryContract, ticketsContract, account)
      if (isSubscribed) {
        setClaimAmount(claim)
        setClaimLoading(false)
      }
      return() => {
        isSubscribed = false;
      }
    };
    if (account && lotteryContract && ticketsContract) {
      fetchBalance().then()
    }
    return() => {
      isSubscribed = false;
    }
  }, [account, lotteryContract, ticketsContract, lastUpdated])

  return { claimLoading, claimAmount, setLastUpdated }
}

export const useWinningNumbers = () => {
  const [winningNumbers, setWinningNumbers] = useState([0, 0, 0, 0])
  const lotteryContract = useLottery()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    let isSubscribed = true
    const fetchBalance = async () => {
      const rewards = await getWinningNumbers(lotteryContract)
      if (isSubscribed) {
        setWinningNumbers(rewards)
      }
    }
    if (lotteryContract) {
      fetchBalance().then()
    }
    return() => {
      isSubscribed = false
    }
  }, [fastRefresh, lotteryContract, setWinningNumbers])

  return winningNumbers
}

export const useMatchingRewardLength = (numbers) => {
  const [matchingNumbers, setMatchingNumbers] = useState(0)
  const lotteryContract = useLottery()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    let isSubscribed = true
    const fetchBalance = async () => {
      const matchedNumbers = await getMatchingRewardLength(lotteryContract, numbers)
      if (isSubscribed) {
        setMatchingNumbers(matchedNumbers)
      }
    }

    if (lotteryContract) {
      fetchBalance().then()
    }
    return() => {
      isSubscribed = false
    }
  }, [lotteryContract, numbers, fastRefresh])

  return matchingNumbers
}

export default useTickets
