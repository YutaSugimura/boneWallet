import { useCallback, useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { currentNetworkState, networkListState } from '../../recoil/atoms/network';
import { addStorageCustomNetworkList, getStorageCustomNetworkList } from '../../storage/network';
import {
  getStorageCurrentNetworkIndex,
  setStorageCurrentNetworkIndex,
} from '../../storage/network/current';

export const useNetworkList = () => {
  const [state, setState] = useRecoilState(networkListState);
  const setCurrentNetwork = useSetRecoilState(currentNetworkState);

  const addCustomNetwork = useCallback(
    async (label: string, url: string) => {
      const result = await addStorageCustomNetworkList(label, url);

      if (result) {
        setState((prev) => [...prev, { type: 'custom', label, url }]);
      }
    },
    [setState],
  );

  const onChangeNetwork = useCallback(
    (index: number) => async () => {
      const result = await setStorageCurrentNetworkIndex(index);
      result && setCurrentNetwork({ ...state[index] });
    },
    [setCurrentNetwork, state],
  );

  return {
    addCustomNetwork,
    onChangeNetwork,
  };
};

export const useNetworkEffect = () => {
  const [state, setState] = useRecoilState(networkListState);
  const setCurrentNetwork = useSetRecoilState(currentNetworkState);

  useEffect(() => {
    (async () => {
      const customNetworkList = await getStorageCustomNetworkList();
      const newList = [...state, ...customNetworkList];
      setState(newList);

      const currentNetworkIndex = await getStorageCurrentNetworkIndex();
      const currentNetwork = newList[currentNetworkIndex];
      setCurrentNetwork({ ...currentNetwork });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
