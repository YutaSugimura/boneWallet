import { atom } from 'recoil';

export const importMnemonicModalState = atom({
  key: 'importMnemonicModalState',
  default: false,
});

export const importPrivateKeyModalState = atom({
  key: 'importPrivateKeyModalState',
  default: false,
});
