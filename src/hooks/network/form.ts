import { useRecoilValue } from 'recoil';
import { networkFormState } from '../../recoil/atoms/networkForm';
import { useProvider } from '../provider';

export const useNetworkForm = () => {
  const networkFormValue = useRecoilValue(networkFormState);
  const { setJsonRpcProvider } = useProvider();

  const onSubmitEditing = () => {
    setJsonRpcProvider(networkFormValue);
  };

  return {
    onSubmitEditing,
  };
};
