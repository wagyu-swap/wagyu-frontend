import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.wagyu,
    earningToken: tokens.wagyu,
    contractAddress: {
      106: '',
      111: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 1,
    stakingToken: tokens.vusdt,
    earningToken: tokens.wagyu,
    contractAddress: {
      106: '',
      111: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.01388',
    isFinished: false,
  },
  {
    sousId: 2,
    stakingToken: tokens.vether,
    earningToken: tokens.wagyu,
    contractAddress: {
      106: '',
      111: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.01388',
    isFinished: false,
  },
  {
    sousId: 3,
    stakingToken: tokens.wvlx,
    earningToken: tokens.wagyu,
    contractAddress: {
      106: '',
      111: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.01388',
    isFinished: false,
  },
]

export default pools
