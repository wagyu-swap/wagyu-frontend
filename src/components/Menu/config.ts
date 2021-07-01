import { MenuEntry } from '@wagyu-swap-libs/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: 'https://exchange-wagyuswap.herokuapp.com/#/swap',
      },
      {
        label: t('Liquidity'),
        href: 'https://exchange-wagyuswap.herokuapp.com/#/pool',
      },
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  // {
  //   label: t('Pools'),
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  {
    label: t('Lottery'),
    icon: 'TicketIcon',
    href: '/lottery',
  },
]

export default config
