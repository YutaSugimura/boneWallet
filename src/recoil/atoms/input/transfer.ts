import { atom } from 'recoil';

export const toAddressFormState = atom({
  key: 'toAddressFormState',
  default: '',
});

export const amountFormState = atom({
  key: 'amountFormState',
  default: '',
});

export const maxFeeFormState = atom({
  key: 'maxFeeFormState',
  default: '',
});

export const maxPriorityFeeFormState = atom({
  key: 'maxPriorityFeeFormState',
  default: '',
});
