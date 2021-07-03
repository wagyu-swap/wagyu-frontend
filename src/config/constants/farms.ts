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
      111: '0x297170abcFC7AceA729ce128E1326bE125a7F982',
    },
    token: tokens.sauce,
    quoteToken: tokens.wvlx,
  },
  {
    pid: 1,
    lpSymbol: 'WAGYU-VLX LP',
    lpAddresses: {
      106: '',
      111: '0xa6b272aaB652c6d9fE1f53CAD9913c3Aed714073',
    },
    token: tokens.wagyu,
    quoteToken: tokens.wvlx,
  },
  {
    pid: 2,
    lpSymbol: 'VUSDT-VLX LP',
    lpAddresses: {
      106: '',
      111: '0x3683CA928f69F207C5a5243d8A331777bAA2c0aC',
    },
    token: tokens.vusdt,
    quoteToken: tokens.wvlx,
  },
  {
    pid: 3,
    lpSymbol: 'VUSDT-WAGYU LP',
    lpAddresses: {
      106: '',
      111: '0x8899e8a675E5117acc38Dd4240Bd5968f5284d6C',
    },
    token: tokens.vusdt,
    quoteToken: tokens.wagyu,
  },
  {
    pid: 4,
    lpSymbol: 'VETHER-WAGYU LP',
    lpAddresses: {
      106: '',
      111: '0x67C46cA7a14c7aa6bBdC25c0341A2DD1F2eC8757',
    },
    token: tokens.vether,
    quoteToken: tokens.wagyu,
  },
  {
    pid: 5,
    lpSymbol: 'VBNB-WAGYU LP',
    lpAddresses: {
      106: '',
      111: '0xaBA00887aB1d9213169d1F44430E28cf12D61d68',
    },
    token: tokens.vbnb,
    quoteToken: tokens.wagyu,
  },
]

export default farms
