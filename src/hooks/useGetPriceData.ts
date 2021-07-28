import { useEffect, useState } from 'react'

type ApiResponse = {
  updated_at: string
  data: {
    [key: string]: {
      name: string
      symbol: string
      price: string
      price_VLX: string
    }
  }
}

const api = 'https://staging.api.wagyuswap.app/api/tokens'

const useGetPriceData = () => {
  const [data, setData] = useState<ApiResponse | null>(null)

  useEffect(() => {
    let isSubscribed = true;
    const fetchData = async () => {
      try {
        const response = await fetch(api)
        const res: ApiResponse = await response.json()
        if (isSubscribed) {
          setData(res)
        }
      } catch (error) {
        console.error('Unable to fetch price data:', error)
      }
    }
    fetchData().then();
    return() => {
      isSubscribed = false;
    }
  }, [setData])

  return data
}

export default useGetPriceData
