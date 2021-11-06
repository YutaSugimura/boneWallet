import { useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import { getInfuraProvider, getJsonRpcProvider } from '../../libs/wallet';
import { currentNetworkState, infuraKeyState } from '../../recoil/atoms/network';

export const useProvider = () => {
  const infuraKeyValues = useRecoilValue(infuraKeyState);
  const currentNetworkValues = useRecoilValue(currentNetworkState);

  const getProvider = useCallback(() => {
    if (infuraKeyValues.isLoading || currentNetworkValues.isLoading) {
      return null;
    }

    if (currentNetworkValues.network.type === 'basic') {
      const network = currentNetworkValues.network.network;
      return getInfuraProvider(network, infuraKeyValues);
    }

    if (currentNetworkValues.network.type === 'custom') {
      const rpcUrl = currentNetworkValues.network.rpcUrl;
      return getJsonRpcProvider(rpcUrl);
    }

    return null;
  }, [infuraKeyValues, currentNetworkValues]);

  return {
    getProvider,
  };
};
