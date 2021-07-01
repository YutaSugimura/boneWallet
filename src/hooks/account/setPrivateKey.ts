import { useState } from 'react';
import type { UseFormReturn } from 'react-hook-form';
import type Ethers from 'ethers';
import type { ImportPrivateKeyNavigationProp } from '../../navigation/importPrivateKey';
import type { PrivateKeyFormData } from '../../types/form';

export const usePrivateKeyFormCore = () => {
  const [address, setAddress] = useState<string>('');
  const [privateKey, setPrivateKey] = useState<string>('');
  const [errors, setErrors] = useState<string>('');

  const navigation: ImportPrivateKeyNavigationProp<'ImportPrivateKey'> =
    require('@react-navigation/native').useNavigation();
  const { control, handleSubmit, formState, reset }: UseFormReturn<PrivateKeyFormData> =
    require('react-hook-form').useFormContext();
  const { setAccount } = require('../../context/account').useAccountDispatch();

  const onSubmit = (data: PrivateKeyFormData) => {
    const ethers: typeof Ethers = require('ethers');

    try {
      let wallet = new ethers.Wallet(data.privateKey);
      setAddress(wallet.address);
      setPrivateKey(data.privateKey);
      setAccount(wallet.address, data.privateKey, 'account1');
      navigation.navigate('ConfirmPrivateKey');
    } catch {
      setErrors('PrivateKey is incorrect.');
    }
  };

  const resetForm = () => {
    reset();
  };

  return {
    address,
    privateKey,
    errors,
    control,
    handleSubmit,
    formState,
    resetForm,
    onSubmit,
  };
};
