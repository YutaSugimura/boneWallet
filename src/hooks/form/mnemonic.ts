import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { mnemonicFormState } from '../../recoil/atoms/input/mnemonic';
import type { RootNavigationProp } from '../../navigation';
import { mnemonicToAddressState } from '../../recoil/selector/input/mnemonicToAddress';
import { useMnemonicHooks } from '../account/mnemonic';

type MnemonicFormState = {
  mnemonic: string;
};

export const useMnemonicFormHooks = () => {
  const navigation = useNavigation<RootNavigationProp<'ImportMnemonic'>>();
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
  const navigation = useNavigation<RootNavigationProp<'ConfirmMnemonic'>>();
  const { mnemonic, address, errors } = useRecoilValue(mnemonicToAddressState);
  const { saveMnemonic } = useMnemonicHooks();

  const setStorageMnemonic = async () => {
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
  };

  return {
    mnemonic,
    address,
    errors,
    setStorageMnemonic,
  };
};
