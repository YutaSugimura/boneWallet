import { atom } from 'recoil';

export const transactionStatus = atom({
  key: 'transactionStatus',
  default: { txHash: null, status: 'pending' } as {
    txHash: null | string;
    status: 'pending' | 'reject' | 'complete';
  },
});
