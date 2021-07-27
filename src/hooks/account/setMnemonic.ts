import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import type Ethers from 'ethers';
import type { ImportMnemonicNavigationProp } from '../../navigation/importMnemonic';
import type { MnemonicFormData } from '../../types/form';

export const useMnemonicFormCore = () => {
  const [address, setAddress] = useState<string>('');
  const [mnemonic, setMnemonic] = useState<string>('');
  const [errors, setErrors] = useState<string>('');

  const navigation = useNavigation<ImportMnemonicNavigationProp<'ImportMnemonic'>>();
  const { control, handleSubmit, formState, reset } = useFormContext<MnemonicFormData>();

  const onSubmit = (data: MnemonicFormData) => {
    const ethers: typeof Ethers = require('ethers');

    try {
      const hdnode = ethers.utils.HDNode.fromMnemonic(data.mnemonic);
      const account1 = hdnode.derivePath("m/44'/60'/0'/0");
      setAddress(account1.address);
      setMnemonic(data.mnemonic);

      navigation.navigate('ConfirmMnemonic');
    } catch {
      setErrors('PrivateKey is incorrect.');
    }
  };

  const importMnemonic = () => {
    if (mnemonic.length === 0) {
      return;
    }

    console.log({ address, mnemonic });
    navigation.popToTop();
    navigation.goBack();
  };

  const resetForm = () => {
    reset();
  };

  return {
    address,
    mnemonic,
    errors,
    control,
    handleSubmit,
    formState,
    resetForm,
    onSubmit,
    importMnemonic,
  };
};
