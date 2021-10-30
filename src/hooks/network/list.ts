import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { currentNetworkState } from '../../recoil/atoms/network';
import type { BasicNetwork, CustomNetwork } from '../../types/network';
import { setStorageCurrentNetwork } from '../../storage/network/current';

export const useNetworkList = () => {
  const setCurrentNetwork = useSetRecoilState(currentNetworkState);

  const changeConnetNetwork = useCallback(
    (network: BasicNetwork | CustomNetwork) => async () => {
      if (network.type === 'basic') {
        setCurrentNetwork({ isLoading: false, network });
      } else if (network.type === 'custom') {
        setCurrentNetwork({ isLoading: false, network });
      }

      await setStorageCurrentNetwork(network.type, network.networkName);
    },
    [setCurrentNetwork],
  );

  return {
    changeConnetNetwork,
  };
};
