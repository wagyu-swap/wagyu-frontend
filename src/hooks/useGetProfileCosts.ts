import { useEffect, useState } from 'react'
import { useTranslation } from 'contexts/Localization'
import BigNumber from 'bignumber.js'
import { getProfileContract } from 'utils/contractHelpers'
import makeBatchRequest from 'utils/makeBatchRequest'
import { BIG_ZERO } from 'utils/bigNumber'
import useToast from './useToast'

const useGetProfileCosts = () => {
  const { t } = useTranslation()
  const [costs, setCosts] = useState({
    numberWagyuToReactivate: BIG_ZERO,
    numberWagyuToRegister: BIG_ZERO,
    numberWagyuToUpdate: BIG_ZERO,
  })
  const { toastError } = useToast()

  useEffect(() => {
    const fetchCosts = async () => {
      try {
        const profileContract = getProfileContract()
        const [numberWagyuToReactivate, numberWagyuToRegister, numberWagyuToUpdate] = await makeBatchRequest([
          profileContract.methods.numberWagyuToReactivate().call,
          profileContract.methods.numberWagyuToRegister().call,
          profileContract.methods.numberWagyuToUpdate().call,
        ])

        setCosts({
          numberWagyuToReactivate: new BigNumber(numberWagyuToReactivate as string),
          numberWagyuToRegister: new BigNumber(numberWagyuToRegister as string),
          numberWagyuToUpdate: new BigNumber(numberWagyuToUpdate as string),
        })
      } catch (error) {
        toastError(t('Error'), t('Could not retrieve WAGYU costs for profile'))
      }
    }

    fetchCosts()
  }, [setCosts, toastError, t])

  return costs
}

export default useGetProfileCosts
