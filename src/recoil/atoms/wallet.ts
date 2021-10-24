import { atom } from 'recoil';

export const isWalletState = atom({
  key: 'isWalletState',
  default: { isLoading: true, isWallet: false },
});
