import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { privatekeyFormState } from '../../recoil/atoms/input/privatekey';
import type { ImportPrivateKeyNavigationProp } from '../../navigation/importPrivateKey';
import type { PrivateKeyFormData } from '../../types/form';
import { privatekeyToAddressState } from '../../recoil/selector/input/privatekey';

export const usePrivatekeyFormHooks = () => {
  const navigation = useNavigation<ImportPrivateKeyNavigationProp<'ImportPrivateKey'>>();
  const { control, handleSubmit } = useForm<PrivateKeyFormData>();
  const setPrivatekeyFormState = useSetRecoilState(privatekeyFormState);

  const onSubmit = (data: PrivateKeyFormData) => {
    setPrivatekeyFormState(data.privateKey);
    navigation.navigate('ConfirmPrivateKey');
  };

  return {
    control,
    handleSubmit,
    onSubmit,
  };
};

export const useSetPrivatekey = () => {
  const navigation = useNavigation<ImportPrivateKeyNavigationProp<'ConfirmPrivateKey'>>();
  const { privatekey, address, errors } = useRecoilValue(privatekeyToAddressState);

  const setStoragePrivatekey = () => {
    if (errors) {
      return;
    }

    console.log({ privatekey, address });
    navigation.popToTop();
    navigation.goBack();
  };

  return {
    privatekey,
    address,
    errors,
    setStoragePrivatekey,
  };
};
