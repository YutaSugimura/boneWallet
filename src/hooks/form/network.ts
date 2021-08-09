import { useForm } from 'react-hook-form';
import type { NetworkFormData } from '../../types/form';
import { useNetworkList } from '../network/list';

export const useNetworkFormHooks = () => {
  const { control, handleSubmit } = useForm<NetworkFormData>();
  const { addCustomNetwork } = useNetworkList();

  const onSubmit = (data: NetworkFormData) => {
    addCustomNetwork(data.label, data.url);
  };

  return {
    control,
    handleSubmit,
    onSubmit,
  };
};
