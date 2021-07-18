import { useState } from 'react';
import type { Wallet } from '../../types/wallet';

export const useWalletCore = (initalState: Wallet = null) => {
  const [state, setState] = useState<Wallet>(initalState);

  const setWallet = (newWallet: Wallet) => {
    setState(newWallet);
  };

  const resetWallet = () => {
    setState(null);
  };

  return {
    wallet: state,
    setWallet,
    resetWallet,
  };
};
