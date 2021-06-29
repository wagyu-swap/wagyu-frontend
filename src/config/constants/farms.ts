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
      106: '',
      111: '0xb0922F3D63A55517468b6Eb4383f2CaD3Abf856D',
    },
    token: tokens.sauce,
    quoteToken: tokens.wvlx,
  },
  {
    pid: 1,
    lpSymbol: 'WAGYU-VLX LP',
    lpAddresses: {
      106: '',
      111: '0x579Bbafc6eD9280B297081126de039E1099417d6',
    },
    token: tokens.wagyu,
    quoteToken: tokens.wvlx,
  },
  {
    pid: 2,
    lpSymbol: 'WAGYU-VUSDT LP',
    lpAddresses: {
      106: '',
      111: '0xd63Fdfa29bC2d44da1D81927a67091CB858a16c7',
    },
    token: tokens.wagyu,
    quoteToken: tokens.vusdt,
  },
  {
    pid: 3,
    lpSymbol: 'VLX-VUSDT LP',
    lpAddresses: {
      106: '',
      111: '0x2103800f23FFAFf4b67Ba5601A7941196b8F8da4',
    },
    token: tokens.wvlx,
    quoteToken: tokens.vusdt,
  },
  {
    pid: 4,
    lpSymbol: 'WAGYU-VETHER LP',
    lpAddresses: {
      106: '',
      111: '0x0415fAdaee404A4F302064f43662Ff4adEA70ab3',
    },
    token: tokens.wagyu,
    quoteToken: tokens.vether,
  },
  // {
  //   pid: 2,
  //   lpSymbol: 'WAGYU-VUSDT LP',
  //   lpAddresses: {
  //     106: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
  //     111: '',
  //   },
  //   token: tokens.wagyu,
  //   quoteToken: tokens.vusdt,
  // },
  // {
  //   pid: 3,
  //   lpSymbol: 'WAGYU-VETHER LP',
  //   lpAddresses: {
  //     106: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
  //     111: '',
  //   },
  //   token: tokens.wagyu,
  //   quoteToken: tokens.vether,
  // },
]

export default farms
