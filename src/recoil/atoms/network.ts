import { atom } from 'recoil';

export const networkState = atom({
  key: 'networkState',
  default: { chainId: -1, name: '', isJsonRpcProvider: false },
});
