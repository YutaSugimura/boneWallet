import { atom } from 'recoil';
import type { FeeData } from '../../types/fee';

export const feeState = atom({
  key: 'feeState',
  default: { baseFee: 0, priorityFee: 0, maxFee: 0 } as FeeData,
});
