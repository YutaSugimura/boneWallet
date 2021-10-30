import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { currentNetworkState } from '../../recoil/atoms/network';
import { NETWORK_LIST } from '../../common/network';
import { getStorageCurrentNetwork } from '../../storage/network/current';

export const useSetupNetworkEffect = () => {
  const setCurrentNetwork = useSetRecoilState(currentNetworkState);

  useEffect(() => {
    (async () => {
      const storageValue = await getStorageCurrentNetwork();
      if (storageValue !== null) {
        const { type, networkName } = storageValue;

        if (type === 'basic') {
          const network = NETWORK_LIST.filter((item) => item.networkName === networkName);
          if (network.length) {
            setCurrentNetwork({
              isLoading: false,
              network: { type: 'basic', networkName, network: network[0].network },
            });
          }
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
