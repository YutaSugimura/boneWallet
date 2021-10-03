import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isAccountState } from '../../recoil/atoms/account';
import { getStorageMnemonic } from '../../storage/account/mnemonic';

export const useSetup = () => {
  const state = useRecoilValue(isAccountState);
  const setState = useSetRecoilState(isAccountState);

  useEffect(() => {
    (async () => {
      if (!state.isLoading) {
        return;
      }

      const result = await getStorageMnemonic();

      if (!result || result === null) {
        return setState({ isLoading: false, isAccount: false });
      }

      setState({ isLoading: false, isAccount: true });
    })();
  }, [state.isLoading, setState]);
};
