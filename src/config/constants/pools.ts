import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.wagyu,
    earningToken: tokens.wagyu,
    contractAddress: {
      106: '',
      111: '0x331ed46B7D69b4B0d52ccbb8B688C76cA86F6F5C',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.05',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 1,
    stakingToken: tokens.vusdt,
    earningToken: tokens.wagyu,
    contractAddress: {
      106: '',
      111: '0x1Fff48525E10dc82a47351e1AF03E276A32C0341',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.01',
    isFinished: false,
  },
  {
    sousId: 2,
    stakingToken: tokens.vether,
    earningToken: tokens.wagyu,
    contractAddress: {
      106: '',
      111: '0x973FF63C33f536F13Ef0e2519d4f59CFdccE1ee5',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.03',
    isFinished: false,
  },
  {
    sousId: 3,
    stakingToken: tokens.vbnb,
    earningToken: tokens.wagyu,
    contractAddress: {
      106: '',
      111: '0x79803775754188A2C14AA5eD3849aBa0a235648e',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.02',
    isFinished: false,
  },
  {
    sousId: 4,
    stakingToken: tokens.vlx,
    earningToken: tokens.wagyu,
    contractAddress: {
      106: '',
      111: '0x5319cAd7537Ee6A584899F2FC374932751eF2C26',
    },
    poolCategory: PoolCategory.VELAS,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.0042',
    isFinished: false,
  },
]

export default pools
