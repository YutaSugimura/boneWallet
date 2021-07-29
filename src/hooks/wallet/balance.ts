import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { walletState } from '../../recoil/atoms/wallet';
import { balanceState } from '../../recoil/atoms/balance';

export const useBalanceEffect = () => {
  const wallet = useRecoilValue(walletState);
  const setState = useSetRecoilState(balanceState);

  useEffect(() => {
    (async () => {
      if (wallet !== null) {
        const balance = await wallet.getBalance();
        setState(balance.toString());
      }
    })();
  }, [wallet, setState]);
};
