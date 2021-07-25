import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { walletState } from '../../recoil/atoms/wallet';

export const useBalance = () => {
  const [state, setState] = useState<string>('');

  const wallet = useRecoilValue(walletState);

  useEffect(() => {
    (async () => {
      if (wallet !== null) {
        const balance = await wallet.getBalance();
        setState(balance.toString());
      }
    })();
  }, [wallet]);

  return {
    balance: state,
  };
};
