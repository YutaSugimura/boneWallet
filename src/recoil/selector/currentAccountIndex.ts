import { selector } from 'recoil';
import { getStorageCurrentAccountIndex } from '../../storage/account/currentIndex';
import { accountListState } from '../atoms/account';

export const currentAccountState = selector({
  key: 'currentAccountState',
  get: async ({ get }) => {
    const accountList = get(accountListState);

    const storage = await getStorageCurrentAccountIndex();
    const index = storage !== null ? storage : 0;

    const account = accountList[index];
    const label = account ? account.label : '';
    const address = account ? account.address : '';
    const secretkeyType = account ? account.secretkeyType : 'privatekey';

    return {
      currentIndex: index,
      label,
      address,
      secretkeyType,
    };
  },
});
