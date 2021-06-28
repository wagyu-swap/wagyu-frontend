import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'WAGYU',
    lpAddresses: {
      111: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      106: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    token: tokens.sauce,
    quoteToken: tokens.wvlx,
  },
  {
    pid: 251,
    lpSymbol: 'WAGYU-VLX LP',
    lpAddresses: {
      111: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      106: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    token: tokens.wagyu,
    quoteToken: tokens.wvlx,
  },
  {
    pid: 252,
    lpSymbol: 'VUSDT-VLX LP',
    lpAddresses: {
      111: '',
      106: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.vusdt,
    quoteToken: tokens.wvlx,
  },
  {
    pid: 253,
    lpSymbol: 'VETHER-VLX LP',
    lpAddresses: {
      111: '',
      106: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.vether,
    quoteToken: tokens.wvlx,
  },
  {
    pid: 1,
    lpSymbol: 'WAGYU-VUSDT LP',
    lpAddresses: {
      111: '',
      106: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.wagyu,
    quoteToken: tokens.vusdt,
  },
  {
    pid: 2,
    lpSymbol: 'WAGYU-VETHER LP',
    lpAddresses: {
      111: '',
      106: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.wagyu,
    quoteToken: tokens.vether,
  },
]

export default farms
