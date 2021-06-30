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
      111: '0x6671266d953426D05E6906a514a1Fa2EA7960fE0',
    },
    token: tokens.sauce,
    quoteToken: tokens.wvlx,
  },
  {
    pid: 1,
    lpSymbol: 'WAGYU-VLX LP',
    lpAddresses: {
      106: '',
      111: '0x7D0fb97ef63Cfe1Af74a8055A427A99bbAadd94F',
    },
    token: tokens.wagyu,
    quoteToken: tokens.wvlx,
  },
  {
    pid: 2,
    lpSymbol: 'VUSDT-VLX LP',
    lpAddresses: {
      106: '',
      111: '0x2103800f23FFAFf4b67Ba5601A7941196b8F8da4',
    },
    token: tokens.vusdt,
    quoteToken: tokens.wvlx,
  },
  {
    pid: 3,
    lpSymbol: 'VUSDT-WAGYU LP',
    lpAddresses: {
      106: '',
      111: '0x075ae4D93Dcd27AA3db4CFa629D7A138deFf1df8',
    },
    token: tokens.vusdt,
    quoteToken: tokens.wagyu,
  },
  {
    pid: 4,
    lpSymbol: 'VETHER-WAGYU LP',
    lpAddresses: {
      106: '',
      111: '0xaaa2F9546a1a58AB878Fee943f816f8baaf17cB3',
    },
    token: tokens.vether,
    quoteToken: tokens.wagyu,
  },
  {
    pid: 5,
    lpSymbol: 'VBNB-WAGYU LP',
    lpAddresses: {
      106: '',
      111: '0x931be9Dd387F335279055568F255f8dBdAb0c31a',
    },
    token: tokens.vbnb,
    quoteToken: tokens.wagyu,
  },
]

export default farms
