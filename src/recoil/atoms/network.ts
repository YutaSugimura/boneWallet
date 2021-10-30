import { atom } from 'recoil';
import type { CurrentNetworkState, CustomNetworkList } from '../../types/network';

export const currentNetworkState = atom({
  key: 'currentNetworkState',
  default: { isLoading: true } as CurrentNetworkState,
});

export const customNetworkListState = atom({
  key: 'customNetworkListState',
  default: [] as CustomNetworkList,
});
