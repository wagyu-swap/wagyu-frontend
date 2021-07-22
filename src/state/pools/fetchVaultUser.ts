import BigNumber from 'bignumber.js'
import { getWagyuVaultContract } from 'utils/contractHelpers'

const wagyuVaultContract = getWagyuVaultContract()

const fetchVaultUser = async (account: string) => {
  try {
    const userContractResponse = await wagyuVaultContract.methods.userInfo(account).call()
    return {
      isLoading: false,
      userShares: new BigNumber(userContractResponse.shares).toJSON(),
      lastDepositedTime: userContractResponse.lastDepositedTime as string,
      lastUserActionTime: userContractResponse.lastUserActionTime as string,
      wagyuAtLastUserAction: new BigNumber(userContractResponse.wagyuAtLastUserAction).toJSON(),
    }
  } catch (error) {
    return {
      isLoading: true,
      userShares: null,
      lastDepositedTime: null,
      lastUserActionTime: null,
      wagyuAtLastUserAction: null,
    }
  }
}

export default fetchVaultUser
