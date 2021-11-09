import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';
import { addressListState } from '../../../recoil/atoms/wallet';
import { exportPrivateKeyModalState } from '../../../recoil/atoms/ui';
import type { AddressList, KeyType } from '../../../types/wallet';
import {
  removeStorageAddressListItem,
  updateStorageSelectedAddress,
} from '../../../storage/wallet/list';
import { removeStoragePrivateKey } from '../../../storage/wallet/privatekey';
import { Alert } from 'react-native';

export const useWalletList = () => {
  const [addressList, setAddressList] = useRecoilState(addressListState);
  const setExportModal = useSetRecoilState(exportPrivateKeyModalState);
  const resetModal = useResetRecoilState(exportPrivateKeyModalState);

  const changeAddress = (targetAddress: string) => async () => {
    const newList: AddressList = [];

    for (const item of addressList) {
      newList.push({
        ...item,
        selected: item.address === targetAddress ? true : false,
      });
    }

    setAddressList([...newList]);
    await updateStorageSelectedAddress(targetAddress);
  };

  const removeAddress = (targetAddress: string, keyType: KeyType) => async () => {
    if (keyType === 'mnemonic') {
      return;
    }

    const func = async () => {
      const newList: AddressList = [];

      for (const item of addressList) {
        if (item.address !== targetAddress) {
          newList.push(item);
        }
      }

      if (newList.filter((item) => item.selected).length === 0) {
        newList[0].selected = true;
      }

      setAddressList([...newList]);
      resetModal();
      await Promise.all([
        removeStoragePrivateKey(targetAddress),
        removeStorageAddressListItem(targetAddress),
      ]);
    };

    Alert.alert(
      'Do you want to delete this account?',
      'It will be deleted completely. Are you sure you want to do this?',
      [
        { style: 'cancel', text: 'Cancel' },
        { style: 'destructive', text: 'OK', onPress: func },
      ],
    );
  };

  const openPrivateKeyModal = (targetAddress: string, keyType: KeyType) => () => {
    setExportModal({ isVisible: true, address: targetAddress, keyType });
  };

  return {
    changeAddress,
    removeAddress,
    openPrivateKeyModal,
  };
};
