import { atom } from 'recoil';
import type { Accounts } from '../../types/account';

export const accountListState = atom({
  key: 'accountListState',
  default: [] as Accounts,
});

/**
 * accountList
 *
 * [
 *   {
 *     label: 'main',
 *     address: 0x123...,
 *   },
 *     label: 'sub',
 *     address: 0x123...,
 *   },
 * ]
 *
 * storage
 * key: mnemonic,
 * value: 'word rock stone ...',
 *
 * key: account/${LABEL}
 * value: {
 *  type: 'privatekey',
 *  key: '0x1234...',
 * }
 *
 */
