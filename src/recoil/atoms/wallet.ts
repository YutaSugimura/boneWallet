import { atom } from 'recoil';
import type { AddressList } from '../../types/wallet';

export const isWalletState = atom({
  key: 'isWalletState',
  default: { isLoading: true, isWallet: false },
});

export const addressListState = atom({
  key: 'addressListState',
  default: [] as AddressList,
});
