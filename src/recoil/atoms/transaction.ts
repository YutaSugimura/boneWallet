import { atom } from 'recoil';

export const transactionModalStatus = atom({
  key: 'transactionModalStatus',
  default: false,
});

export const transactionStatus = atom({
  key: 'transactionStatus',
  default: null as State,
});

type State = {
  txHash: string;
  status: 'pending' | 'reject' | 'complete';
} | null;
