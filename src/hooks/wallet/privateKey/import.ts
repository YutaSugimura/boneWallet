import { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { useForm } from 'react-hook-form';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { addressListState } from '../../../recoil/atoms/wallet';
import { importPrivateKeyModalState } from '../../../recoil/atoms/ui';
import type { WalletNavigationProp } from '../../../navigation/wallet';
import type { PrivateKeyFormData } from '../../../types/form';
import { privatekeyToAddress } from '../../../libs/wallet';
import { setStorageAddressListItem } from '../../../storage/wallet/list';
import {
  getStoragePrivateKey,
  setStoragePrivateKey,
  removeStoragePrivateKey,
} from '../../../storage/wallet/privatekey';

export const useImportPrivateKey = () => {
  const navigation = useNavigation<WalletNavigationProp<'ImportPrivateKey'>>();
  const { control, handleSubmit, reset } = useForm<PrivateKeyFormData>();

  const setAddressList = useSetRecoilState(addressListState);
  const setIsModal = useSetRecoilState(importPrivateKeyModalState);
  const resetModal = useResetRecoilState(importPrivateKeyModalState);

  const [label, setLabel] = useState<string>();
  const [privateKey, setPrivateKey] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [message, setMessage] = useState<string>();

  const onSubmit = async (data: PrivateKeyFormData) => {
    const result = await privatekeyToAddress(data.privateKey);

    if ('errors' in result) {
      setMessage(result.errors);
      return;
    }

    const checkStorage = await getStoragePrivateKey(result.address);
    if (checkStorage !== null) {
      setMessage('This address has already been added');
      return;
    }

    setLabel(data.label);
    setPrivateKey(data.privateKey);
    setAddress(result.address);
    setIsModal(true);
  };

  const savePrivateKey = async () => {
    if (!privateKey || !address || !label) {
      return;
    }

    const result = await setStoragePrivateKey(address, 'privatekey', privateKey);

    if (result) {
      const message = await setStorageAddressListItem({
        label,
        address,
        keyType: 'privatekey',
      });

      if (message === 'ok') {
        setAddressList((prev) => [...prev, { label, address, keyType: 'privatekey' }]);
        resetModal();

        setTimeout(() => {
          navigation.popToTop();
        }, 500);
        return;
      }

      setMessage(message);
      await removeStoragePrivateKey(address);
      setIsModal(false);
      return;
    }
  };

  const clear = () => {
    reset();
    resetModal();
    setLabel(undefined);
    setAddress(undefined);
    setPrivateKey(undefined);
    setMessage(undefined);
  };

  return {
    control,
    handleSubmit,
    onSubmit,
    reset: clear,
    label,
    privateKey,
    address,
    message,
    savePrivateKey,
  };
};
