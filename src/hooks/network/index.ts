import { useProvider } from '../provider';

export const useNetworkHooks = () => {
  const { setBaseProvider } = useProvider();

  const changeNetwork = (newNetwork: string) => async () => {
    await setBaseProvider(newNetwork);
  };

  return {
    changeNetwork,
  };
};
