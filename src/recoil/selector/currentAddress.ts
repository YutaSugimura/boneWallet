import { selector } from 'recoil';
import { walletState } from '../atoms/wallet';

export const currentAddressState = selector({
  key: 'currentAddressState',
  get: ({ get }) => {
    const wallet = get(walletState);
    if (wallet === null) {
      return {
        address: '',
        privateKey: '',
      };
    }

    return {
      address: wallet.address,
      privateKey: wallet.privateKey,
    };
  },
});
