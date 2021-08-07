import { selector } from 'recoil';
import { mnemonicFormState } from '../../atoms/input/mnemonic';
import { createHDWalletFromMnemonic } from '../../../utils/createWallet';

export const mnemonicToAddressState = selector({
  key: 'mnemonicToAddressState',
  get: ({ get }) => {
    const mnemonic = get(mnemonicFormState);
    const { address, errors } = createHDWalletFromMnemonic(mnemonic);

    return {
      mnemonic,
      address,
      errors,
    };
  },
});
