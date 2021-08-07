import { selector } from 'recoil';
import { privatekeyFormState } from '../../atoms/input/privatekey';
import { privatekeyToAddress } from '../../../utils/createWallet';

export const privatekeyToAddressState = selector({
  key: 'privatekeyToAddressState',
  get: ({ get }) => {
    const privatekey = get(privatekeyFormState);
    const { address, errors } = privatekeyToAddress(privatekey);

    return {
      privatekey,
      address,
      errors,
    };
  },
});
