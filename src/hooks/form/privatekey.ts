import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { privatekeyFormState, privatekeyLabelFormState } from '../../recoil/atoms/input/privatekey';
import { privatekeyToAddressState } from '../../recoil/selector/input/privatekey';
import { useAccountlist } from '../account/list';
import type { ImportPrivatekeyNavigationProp } from '../../navigation/importPrivatekey';
import type { PrivateKeyFormData } from '../../types/form';

export const usePrivatekeyFormHooks = () => {
  const navigation = useNavigation<ImportPrivatekeyNavigationProp<'ImportPrivatekey'>>();
  const { control, handleSubmit } = useForm<PrivateKeyFormData>();
  const setPrivatekeyFormState = useSetRecoilState(privatekeyFormState);
  const setPrivatekeyLabelFormState = useSetRecoilState(privatekeyLabelFormState);

  const onSubmit = (data: PrivateKeyFormData) => {
    setPrivatekeyFormState(data.privateKey);
    setPrivatekeyLabelFormState(data.label);
    navigation.navigate('ConfirmPrivatekey');
  };

  return {
    control,
    handleSubmit,
    onSubmit,
  };
};

export const useSetPrivatekey = () => {
  const navigation = useNavigation<ImportPrivatekeyNavigationProp<'ConfirmPrivatekey'>>();
  const label = useRecoilValue(privatekeyLabelFormState);
  const { privatekey, address, errors } = useRecoilValue(privatekeyToAddressState);
  const { addAccountList } = useAccountlist();

  const setStoragePrivatekey = async () => {
    if (errors) {
      return;
    }

    if (!address) {
      return;
    }

    const result = await addAccountList(label, 'privatekey', address, privatekey);
    if (result) {
      console.log({ privatekey, address });
      navigation.popToTop();
      navigation.goBack();
    }
  };

  return {
    privatekey,
    address,
    errors,
    setStoragePrivatekey,
  };
};
