import { useEffect, useState } from 'react'

/* eslint-disable camelcase */
export interface DeBankTvlResponse {
  id: string
  chain: string
  name: string
  site_url: string
  logo_url: string
  has_supported_portfolio: boolean
  tvl: number
}

export const useGetStats = () => {
  const [data, setData] = useState<DeBankTvlResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('https://openapi.debank.com/v1/protocol?id=bsc_wagyuswap')
        // const responseData: DeBankTvlResponse = await response.json()
        // {"id": "bsc_pancakeswap", "chain": "bsc", "name": "PancakeSwap", "site_url": "https://pancakeswap.finance", "logo_url": "https://static.debank.com/image/project/logo_url/bsc_pancakeswap/a4e035cf4495755fddd5ebb6e5657f63.png", "has_supported_portfolio": true, "tvl": 7197010994.253736}
        setData({
          id: 'velas_wagyuswap',
          chain: 'velas',
          name: 'WagyuSwap',
          site_url: 'https://wagyuswap.finance',
          logo_url: '',
          has_supported_portfolio: true,
          tvl: 7197010994.253736
        });
      } catch (error) {
        console.error('Unable to fetch data:', error)
      }
    }

    fetchData().then()
  }, [setData])

  return data
}
