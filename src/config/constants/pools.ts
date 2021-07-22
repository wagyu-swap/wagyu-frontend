import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.wagyu,
    earningToken: tokens.wagyu,
    contractAddress: {
      106: '',
      111: '0xd42ec763748C9B187a7f976C41907921D4897Ac8',
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
      111: '0x24b5442716055D6e01B07c02b87a6b2179bdBD02',
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
      111: '0xB01A761d4Fc2399D310174071401ea9B323CaD44',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '19',
    isFinished: false,
  },
  {
    sousId: 3,
    stakingToken: tokens.vbnb,
    earningToken: tokens.wagyu,
    contractAddress: {
      106: '',
      111: '0x8c1d209984ED65c38f6c72C2eF2A72f68C0503Ee',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '2.9',
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
