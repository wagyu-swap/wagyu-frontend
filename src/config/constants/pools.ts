import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.wagyu,
    earningToken: tokens.wagyu,
    contractAddress: {
      111: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      106: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 142,
    stakingToken: tokens.vusdt,
    earningToken: tokens.wagyu,
    contractAddress: {
      111: '',
      106: '0xbebd44824631b55991fa5f2bf5c7a4ec96ff805b',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.01388',
    isFinished: false,
  },
  {
    sousId: 143,
    stakingToken: tokens.vether,
    earningToken: tokens.wagyu,
    contractAddress: {
      111: '',
      106: '0xbebd44824631b55991fa5f2bf5c7a4ec96ff805b',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.01388',
    isFinished: false,
  },
  {
    sousId: 144,
    stakingToken: tokens.wvlx,
    earningToken: tokens.wagyu,
    contractAddress: {
      111: '',
      106: '0xbebd44824631b55991fa5f2bf5c7a4ec96ff805b',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.01388',
    isFinished: false,
  },
]

export default pools
