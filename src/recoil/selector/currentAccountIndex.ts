import { selector } from 'recoil';
import { getStorageCurrentAccountIndex } from '../../storage/account/currentIndex';
import { accountListState } from '../atoms/account';

export const currentAccountState = selector({
  key: 'currentAccountState',
  get: async ({ get }) => {
    const accountList = get(accountListState);

    const storage = await getStorageCurrentAccountIndex();
    const index = storage !== null ? storage : 0;

    return {
      currentIndex: index,
      label: accountList[index].label,
      address: accountList[index].address,
      secretkeyType: accountList[index].secretkeyType,
    };
  },
});
