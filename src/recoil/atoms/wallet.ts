import { atom } from 'recoil';
import type { Wallet } from '../../types/wallet';

export const walletState = atom({
  key: 'walletState',
  default: null as Wallet,
});
