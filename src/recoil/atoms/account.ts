import { atom } from 'recoil';
import { AccountList } from '../../types/account';

export const accountListState = atom({
  key: 'accountListState',
  default: [] as AccountList,
});
