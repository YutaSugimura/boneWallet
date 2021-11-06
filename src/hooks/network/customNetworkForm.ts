import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';
import { currentNetworkState, customNetworkListState } from '../../recoil/atoms/network';
import { customNetworkFormModalState } from '../../recoil/atoms/ui';
import { setStorageCurrentNetwork } from '../../storage/network/current';
import { setStorageCustomNetworkList } from '../../storage/network/customNetwork';
import type { CustomNetwork, CustomNetworkList } from '../../types/network';

type CustomNetworkFormData = Omit<CustomNetwork, 'type'>;

export const useCustomNetworkForm = () => {
  const { control, handleSubmit, reset } = useForm<CustomNetworkFormData>();
  const [customNetworkList, setCustomNetworkList] = useRecoilState(customNetworkListState);
  const setCurrentNetwork = useSetRecoilState(currentNetworkState);
  const resetModal = useResetRecoilState(customNetworkFormModalState);

  const [message, setMessage] = useState<string>();

  const onSubmit = async (data: CustomNetworkFormData) => {
    const newListItem: CustomNetwork = { ...data, type: 'custom' };
    const newList: CustomNetworkList = [...customNetworkList, newListItem];

    const result = await setStorageCustomNetworkList(newList);
    if (!result) {
      setMessage('error');
      return;
    }

    const resultStorage = await setStorageCurrentNetwork('custom', data.networkName);
    if (!resultStorage) {
      setMessage('error');
      return;
    }

    setCustomNetworkList([...newList]);
    setCurrentNetwork({ isLoading: false, network: newListItem });

    resetModal();
    reset();
    return;
  };

  return {
    control,
    handleSubmit,
    onSubmit,
    message,
  };
};
