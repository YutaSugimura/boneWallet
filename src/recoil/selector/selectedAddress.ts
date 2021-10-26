import { selector } from 'recoil';
import { addressListState } from '../atoms/wallet';

export const selectedAddressState = selector({
  key: 'selectedAddressState',
  get: ({ get }) => {
    const addressList = get(addressListState);

    const _targetAddress = addressList.filter((item) => item.selected);
    if (_targetAddress.length === 0) {
      return null;
    }

    const targetAddress = _targetAddress[0];

    const label = targetAddress.label;
    const address = targetAddress.address;
    const keyType = targetAddress.keyType;
    const selected = true;

    return {
      label,
      address,
      keyType,
      selected,
    };
  },
});
