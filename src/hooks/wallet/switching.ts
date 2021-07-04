import { useEffect } from 'react';
import { useAccountState } from '../../context/account';
import { useProviderState } from '../../context/provider';
import { useWalletDispatch } from '../../context/wallet';
import { createWalletFromPrivateKey } from '../../utils/createWallet';

export const useSwitchingEffect = () => {
  const { account } = useAccountState();
  const { setWallet } = useWalletDispatch();
  const provider = useProviderState();

  useEffect(() => {
    let isMounted = true;

    if (isMounted && provider !== null && account.length === 1) {
      const wallet = createWalletFromPrivateKey(account[0].privateKey, provider);
      setWallet(wallet);
    }

    return () => {
      isMounted = false;
    };
  }, [account.length, provider]);
};