import { Provider } from '../types/ether';

export const getNetwork = async (provider: Provider) => {
  if (provider === null) return;

  const network = await provider.getNetwork();
  return network;
};
