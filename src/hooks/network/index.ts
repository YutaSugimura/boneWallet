import { useProvider } from '../provider';

export const useNetworkHooks = () => {
  const { setBaseProvider } = useProvider();

  const changeNetwork = (newNetwork: string) => () => {
    setBaseProvider(newNetwork);
  };

  return {
    changeNetwork,
  };
};
