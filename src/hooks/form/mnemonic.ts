import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { mnemonicFormState } from '../../recoil/atoms/input/mnemonic';
import type { ImportMnemonicNavigationProp } from '../../navigation/importMnemonic';
import { mnemonicToAddressState } from '../../recoil/selector/input/mnemonicToAddress';

type MnemonicFormState = {
  mnemonic: string;
};

export const useMnemonicFormHooks = () => {
  const navigation = useNavigation<ImportMnemonicNavigationProp<'ImportMnemonic'>>();
  const { control, handleSubmit } = useForm<MnemonicFormState>();
  const setMnemonicFormState = useSetRecoilState(mnemonicFormState);

  const onSubmit = (data: MnemonicFormState) => {
    setMnemonicFormState(data.mnemonic);
    navigation.navigate('ConfirmMnemonic');
  };

  return {
    control,
    handleSubmit,
    onSubmit,
  };
};

export const useSetMnemonic = () => {
  const navigation = useNavigation<ImportMnemonicNavigationProp<'ConfirmMnemonic'>>();
  const { mnemonic, address, errors } = useRecoilValue(mnemonicToAddressState);

  const setStorageMnemonic = () => {
    if (errors) {
      return;
    }

    console.log({ mnemonic, address });
    navigation.popToTop();
    navigation.goBack();
  };

  return {
    mnemonic,
    address,
    errors,
    setStorageMnemonic,
  };
};
