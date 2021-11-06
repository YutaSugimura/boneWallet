import { atom } from 'recoil';
import { KeyType } from '../../types/wallet';

export const importMnemonicModalState = atom({
  key: 'importMnemonicModalState',
  default: false,
});

export const importPrivateKeyModalState = atom({
  key: 'importPrivateKeyModalState',
  default: false,
});

export const exportPrivateKeyModalState = atom({
  key: 'exportPrivateKeyModalState',
  default: {
    isVisible: false,
    address: undefined as string | undefined,
    keyType: undefined as KeyType | undefined,
  },
});

export const customNetworkFormModalState = atom({
  key: 'customNetworkFormModalState',
  default: false,
});

export const loadingState = atom({
  key: 'loadingState',
  default: false,
});
