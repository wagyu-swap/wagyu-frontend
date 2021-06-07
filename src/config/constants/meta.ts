import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'WagyuSwap',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by WagyuSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://WagyuSwap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('WagyuSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('WagyuSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('WagyuSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('WagyuSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('WagyuSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('WagyuSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('WagyuSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('WagyuSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('WagyuSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('WagyuSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('WagyuSwap')}`,
      }
    default:
      return null
  }
}
