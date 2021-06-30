import BigNumber from 'bignumber.js'
import { BIG_ONE, BIG_ZERO } from 'utils/bigNumber'
import { filterFarmsByQuoteToken } from 'utils/farmsPriceHelpers'
import { Farm } from 'state/types'

const getFarmFromTokenSymbol = (farms: Farm[], tokenSymbol: string, preferredQuoteTokens?: string[]): Farm => {
  const farmsWithTokenSymbol = farms.filter((farm) => farm.token.symbol === tokenSymbol)
  const filteredFarm = filterFarmsByQuoteToken(farmsWithTokenSymbol, preferredQuoteTokens)
  return filteredFarm
}

const getFarmBaseTokenPrice = (farm: Farm, quoteTokenFarm: Farm, vlxPriceVusdt: BigNumber): BigNumber => {
  const hasTokenPriceVsQuote = Boolean(farm.tokenPriceVsQuote)
  if (farm.quoteToken.symbol === 'VUSDT') {
    return hasTokenPriceVsQuote ? new BigNumber(farm.tokenPriceVsQuote) : BIG_ZERO
  }

  if (farm.quoteToken.symbol === 'WVLX') {
    return hasTokenPriceVsQuote ? vlxPriceVusdt.times(farm.tokenPriceVsQuote) : BIG_ZERO
  }

  // We can only calculate profits without a quoteTokenFarm for VUSDT/VLX farms
  if (!quoteTokenFarm) {
    return BIG_ZERO
  }

  // Possible alternative farm quoteTokens:
  // UST (i.e. MIR-UST), pBTC (i.e. PNT-pBTC), BTCB (i.e. bBADGER-BTCB), ETH (i.e. SUSHI-ETH)
  // If the farm's quote token isn't VUSDT or WVLX, we then use the quote token, of the original farm's quote token
  // i.e. for farm PNT - pBTC we use the pBTC farm's quote token - VLX, (pBTC - VLX)
  // from the VLX - pBTC price, we can calculate the PNT - VUSDT price
  if (quoteTokenFarm.quoteToken.symbol === 'WVLX') {
    const quoteTokenInVusdt = vlxPriceVusdt.times(quoteTokenFarm.tokenPriceVsQuote)
    return hasTokenPriceVsQuote && quoteTokenInVusdt
      ? new BigNumber(farm.tokenPriceVsQuote).times(quoteTokenInVusdt)
      : BIG_ZERO
  }

  if (quoteTokenFarm.quoteToken.symbol === 'VUSDT') {
    const quoteTokenInVusdt = quoteTokenFarm.tokenPriceVsQuote
    return hasTokenPriceVsQuote && quoteTokenInVusdt
      ? new BigNumber(farm.tokenPriceVsQuote).times(quoteTokenInVusdt)
      : BIG_ZERO
  }

  // Catch in case token does not have immediate or once-removed VUSDT/WVLX quoteToken
  return BIG_ZERO
}

const getFarmQuoteTokenPrice = (farm: Farm, quoteTokenFarm: Farm, vlxPriceVusdt: BigNumber): BigNumber => {
  if (farm.quoteToken.symbol === 'VUSDT') {
    return BIG_ONE
  }

  if (farm.quoteToken.symbol === 'WVLX') {
    return vlxPriceVusdt
  }

  if (!quoteTokenFarm) {
    return BIG_ZERO
  }

  if (quoteTokenFarm.quoteToken.symbol === 'WVLX') {
    return quoteTokenFarm.tokenPriceVsQuote ? vlxPriceVusdt.times(quoteTokenFarm.tokenPriceVsQuote) : BIG_ZERO
  }

  if (quoteTokenFarm.quoteToken.symbol === 'VUSDT') {
    return quoteTokenFarm.tokenPriceVsQuote ? new BigNumber(quoteTokenFarm.tokenPriceVsQuote) : BIG_ZERO
  }

  return BIG_ZERO
}

const fetchFarmsPrices = async (farms) => {
  const vlxVusdtFarm = farms.find((farm: Farm) => farm.pid === 2)
  const vlxPriceVusdt = vlxVusdtFarm.tokenPriceVsQuote ? BIG_ONE.div(vlxVusdtFarm.tokenPriceVsQuote) : BIG_ZERO

  const farmsWithPrices = farms.map((farm) => {
    const quoteTokenFarm = getFarmFromTokenSymbol(farms, farm.quoteToken.symbol)
    const baseTokenPrice = getFarmBaseTokenPrice(farm, quoteTokenFarm, vlxPriceVusdt)
    const quoteTokenPrice = getFarmQuoteTokenPrice(farm, quoteTokenFarm, vlxPriceVusdt)
    const token = { ...farm.token, vusdtPrice: baseTokenPrice.toJSON() }
    const quoteToken = { ...farm.quoteToken, vusdtPrice: quoteTokenPrice.toJSON() }
    return { ...farm, token, quoteToken }
  })

  return farmsWithPrices
}

export default fetchFarmsPrices
