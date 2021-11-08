import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { infuraKeyState } from '../../recoil/atoms/network';
import type { InfuraKeyFormData } from '../../types/infuraKey';
import { setStorageInfuraKey } from '../../storage/wallet/infura';

export const useInfuraForm = () => {
  const setInfuraKey = useSetRecoilState(infuraKeyState);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InfuraKeyFormData>();

  const onSubmit = async ({ projectId, projectSecret }: InfuraKeyFormData) => {
    await setStorageInfuraKey(projectId, projectSecret);
    setInfuraKey({ isLoading: false, isLocalStorage: true, projectId, projectSecret });
    reset();
  };

  return {
    control,
    handleSubmit,
    onSubmit,
    errors,
  };
};
