import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { infuraKeyState } from '../../recoil/atoms/network';
import { getStorageInfuraKey } from '../../storage/wallet/infura';

export const useInfuraKeyEffect = () => {
  const setInfuraKey = useSetRecoilState(infuraKeyState);

  useEffect(() => {
    (async () => {
      const storage = await getStorageInfuraKey();
      if (storage) {
        const { projectId, projectSecret } = storage;
        setInfuraKey({ isLoading: false, isLocalStorage: true, projectId, projectSecret });
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
