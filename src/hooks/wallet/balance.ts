import { useState, useEffect } from 'react';
import { useWalletState } from '../../context/wallet';

export const useBalance = () => {
  const [state, setState] = useState<string>('');

  const { wallet } = useWalletState();

  useEffect(() => {
    const init = async () => {
      const balance = await wallet.getBalance();
      setState(balance.toString());
    };

    if (wallet !== null) {
      init();
    }
  }, [wallet]);

  return {
    balance: state,
  };
};
