import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { mnemonicFormState } from '../../recoil/atoms/input/mnemonic';
import { mnemonicToAddressState } from '../../recoil/selector/input/mnemonicToAddress';
import { useMnemonicHooks } from '../account/mnemonic';
import type { SetupNavigationProp } from '../../navigation/setup';

type MnemonicFormState = {
  mnemonic: string;
};

export const useMnemonicFormHooks = () => {
  const navigation = useNavigation<SetupNavigationProp<'CreateWallet'>>();
  const { control, handleSubmit } = useForm<MnemonicFormState>();
  const setMnemonicFormState = useSetRecoilState(mnemonicFormState);

  const onSubmit = useCallback(
    (data: MnemonicFormState) => {
      setMnemonicFormState(data.mnemonic);
      navigation.navigate('ConfirmImportWallet');
    },
    [navigation, setMnemonicFormState],
  );

  return {
    control,
    handleSubmit,
    onSubmit,
  };
};

export const useSetMnemonic = () => {
  const navigation = useNavigation<SetupNavigationProp<'ConfirmImportWallet'>>();
  const { mnemonic, address, errors } = useRecoilValue(mnemonicToAddressState);
  const { saveMnemonic } = useMnemonicHooks();

  const setStorageMnemonic = useCallback(async () => {
    if (errors) {
      return;
    }

    if (!address) {
      return;
    }

    const result = await saveMnemonic(mnemonic);
    if (result) {
      console.log({ mnemonic, address });
      navigation.popToTop();
    }
  }, [address, errors, mnemonic, navigation, saveMnemonic]);

  return {
    mnemonic,
    address,
    errors,
    setStorageMnemonic,
  };
};
