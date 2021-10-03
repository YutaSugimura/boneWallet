import { useCallback, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { privatekeyFormState, privatekeyLabelFormState } from '../../recoil/atoms/input/privatekey';
import { privatekeyToAddressState } from '../../recoil/selector/input/privatekey';
import { useAccountlist } from '../account/list';
import type { AccountNavigationProp } from '../../navigation/account';
import type { PrivateKeyFormData } from '../../types/form';

export const usePrivatekeyFormHooks = () => {
  const navigation = useNavigation<AccountNavigationProp<'ImportPrivateKey'>>();
  const { control, handleSubmit } = useForm<PrivateKeyFormData>();
  const setPrivatekeyFormState = useSetRecoilState(privatekeyFormState);
  const setPrivatekeyLabelFormState = useSetRecoilState(privatekeyLabelFormState);

  const onSubmit = useCallback(
    (data: PrivateKeyFormData) => {
      setPrivatekeyFormState(data.privateKey);
      setPrivatekeyLabelFormState(data.label);
      navigation.navigate('ConfirmImportPrivateKey');
    },
    [navigation, setPrivatekeyFormState, setPrivatekeyLabelFormState],
  );

  return {
    control,
    handleSubmit,
    onSubmit,
  };
};

export const useSetPrivatekey = () => {
  const navigation = useNavigation<AccountNavigationProp<'ConfirmImportPrivateKey'>>();
  const label = useRecoilValue(privatekeyLabelFormState);
  const { privatekey, address, errors } = useRecoilValue(privatekeyToAddressState);
  const { addAccountList } = useAccountlist();

  const setStoragePrivatekey = useCallback(async () => {
    if (errors) {
      return;
    }

    if (!address) {
      return;
    }

    const result = await addAccountList(label, 'privatekey', address, privatekey);
    if (result) {
      navigation.popToTop();
    }
  }, [addAccountList, address, errors, label, navigation, privatekey]);

  const data = useMemo(
    () => ({
      privatekey,
      address,
      errors,
    }),
    [privatekey, address, errors],
  );

  return {
    ...data,
    setStoragePrivatekey,
  };
};
