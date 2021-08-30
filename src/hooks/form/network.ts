import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import type { NetworkFormData } from '../../types/form';
import { useNetworkList } from '../network/list';

export const useNetworkFormHooks = () => {
  const { control, handleSubmit } = useForm<NetworkFormData>();
  const { addCustomNetwork } = useNetworkList();

  const onSubmit = useCallback(
    (data: NetworkFormData) => {
      addCustomNetwork(data.label, data.url);
    },
    [addCustomNetwork],
  );

  return {
    control,
    handleSubmit,
    onSubmit,
  };
};
