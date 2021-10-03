import { useCallback, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { mnemonicFormState } from '../../recoil/atoms/input/mnemonic';
import type { HomeNavigationProp } from '../../navigation/home';
import { mnemonicToAddressState } from '../../recoil/selector/input/mnemonicToAddress';
import { useMnemonicHooks } from '../account/mnemonic';

type MnemonicFormState = {
  mnemonic: string;
};

export const useMnemonicFormHooks = () => {
  const navigation = useNavigation<HomeNavigationProp<'ImportMnemonic'>>();
  const { control, handleSubmit } = useForm<MnemonicFormState>();
  const setMnemonicFormState = useSetRecoilState(mnemonicFormState);

  const onSubmit = useCallback(
    (data: MnemonicFormState) => {
      setMnemonicFormState(data.mnemonic);
      navigation.navigate('ConfirmMnemonic');
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
  const navigation = useNavigation<HomeNavigationProp<'ConfirmMnemonic'>>();
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

  const data = useMemo(
    () => ({
      mnemonic,
      address,
      errors,
    }),
    [mnemonic, address, errors],
  );

  return {
    ...data,
    setStorageMnemonic,
  };
};
