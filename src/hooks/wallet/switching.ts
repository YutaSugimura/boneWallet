import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { providerState } from '../../recoil/atoms/provider';
import { walletState } from '../../recoil/atoms/wallet';
import { accountState } from '../../recoil/atoms/account';
import { createWalletFromPrivateKey } from '../../utils/createWallet';

export const useSwitchingEffect = () => {
  const provider = useRecoilValue(providerState);
  const account = useRecoilValue(accountState);
  const setWallet = useSetRecoilState(walletState);

  useEffect(() => {
    if (provider !== null && account.length === 1) {
      const wallet = createWalletFromPrivateKey(account[0].privateKey, provider);
      setWallet(wallet);
    }
  }, [provider, account, setWallet]);
};
