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
      111: '0x1746FE6b71f1B603E06D16f437ed5412B9943371',
    },
    token: tokens.wagyu,
    quoteToken: tokens.wvlx,
    multiplier: '6x'
  },
  {
    pid: 2,
    lpSymbol: 'WAGYU-VUSDT LP',
    lpAddresses: {
      106: '',
      111: '0xfD376913e797997ca49FaC9E284a1F804A142BfA',
    },
    token: tokens.wagyu,
    quoteToken: tokens.vusdt,
    multiplier: '6x'
  },
  {
    pid: 3,
    lpSymbol: 'VUSDT-VLX LP',
    lpAddresses: {
      106: '',
      111: '0x2103800f23FFAFf4b67Ba5601A7941196b8F8da4',
    },
    token: tokens.vusdt,
    quoteToken: tokens.wvlx,
    multiplier: '3x'
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
