import { atom } from 'recoil';
import { AccountList } from '../../types/account';

export const isAccountState = atom({
  key: 'isAccountState',
  default: { isLoading: true, isAccount: false },
});

export const accountListState = atom({
  key: 'accountListState',
  default: [] as AccountList,
});

export const currentAccountIndexState = atom({
  key: 'currentAccountIndexState',
  default: 0,
});
