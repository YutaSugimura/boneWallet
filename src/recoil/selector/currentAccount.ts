import { selector } from 'recoil';
import { accountListState, currentAccountIndexState } from '../atoms/account';

export const currentAccountState = selector({
  key: 'currentAccountState',
  get: async ({ get }) => {
    const accountList = get(accountListState);
    const currentAccountIndex = get(currentAccountIndexState);

    const index = currentAccountIndex;

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
