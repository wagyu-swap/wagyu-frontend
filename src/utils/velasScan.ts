import { BASE_VELAS_SCAN_URL } from 'config'

export const getVelasScanAddressUrl = (address: string) => {
  return `${BASE_VELAS_SCAN_URL}/address/${address}/transactions`
}

export const getVelasScanTransactionUrl = (transactionHash: string) => {
  return `${BASE_VELAS_SCAN_URL}/tx/${transactionHash}/internal-transactions`
}

export const getVelasScanBlockNumberUrl = (block: string | number) => {
  return `${BASE_VELAS_SCAN_URL}/blocks/${block}/transactions`
}

export const getVelasScanBlockCountdownUrl = (block: string | number) => {
  return `${BASE_VELAS_SCAN_URL}/blocks/countdown/${block}`
}
