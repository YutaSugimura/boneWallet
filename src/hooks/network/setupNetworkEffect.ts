import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { currentNetworkState, customNetworkListState } from '../../recoil/atoms/network';
import type { BasicNetwork } from '../../types/network';
import { NETWORK_LIST } from '../../common/network';
import { getStorageCurrentNetwork } from '../../storage/network/current';
import { getStorageCustomNetworkList } from '../../storage/network/customNetwork';

export const useSetupNetworkEffect = () => {
  const setCurrentNetwork = useSetRecoilState(currentNetworkState);
  const setCustomNetworkList = useSetRecoilState(customNetworkListState);

  useEffect(() => {
    (async () => {
      const customNetworkList = await getStorageCustomNetworkList();
      customNetworkList.length > 0 && setCustomNetworkList(customNetworkList);

      const storageValue = await getStorageCurrentNetwork();
      if (storageValue !== null) {
        const { type, networkName } = storageValue;

        if (type === 'basic') {
          const targetList = NETWORK_LIST.filter((item) => item.networkName === networkName);
          if (targetList.length) {
            setCurrentNetwork({
              isLoading: false,
              network: {
                ...(targetList[0] as BasicNetwork),
              },
            });
          }
        } else if (type === 'custom') {
          const targetList = customNetworkList.filter((item) => item.networkName === networkName);

          if (targetList.length) {
            setCurrentNetwork({
              isLoading: false,
              network: { ...targetList[0] },
            });
          }
        }
      } else {
        setCurrentNetwork({
          isLoading: false,
          network: {
            type: 'basic',
            networkName: 'mainnet',
            network: 'mainnet',
          },
        });
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
