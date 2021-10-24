import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isWalletState } from '../../recoil/atoms/wallet';
import { getStorageMnemonic } from '../../storage/wallet/mnemonic';

export const useIsWalletEffect = () => {
  const isWalletValue = useRecoilValue(isWalletState);
  const setIsWallet = useSetRecoilState(isWalletState);

  useEffect(() => {
    (async () => {
      if (isWalletValue.isLoading) {
        const result = await getStorageMnemonic();
        setIsWallet({ isLoading: false, isWallet: result ? true : false });
      }
    })();
  }, [isWalletValue.isLoading, setIsWallet]);
};
