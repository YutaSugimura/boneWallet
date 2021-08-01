import { atom } from 'recoil';
import type { Accounts } from '../../types/account';

export const accountState = atom({
  key: 'accountState',
  default: [] as Accounts,
});
