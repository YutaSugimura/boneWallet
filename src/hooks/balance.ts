import { useState } from 'react';
import type { Provider } from '../types/ether';

export const useBalance = () => {
  const provider: Provider = require('../context/provider').useProviderState();
  const [balance, setBalance] = useState<number>(0);

  const getBalance = async (account: string) => {
    if (provider === null) return;

    const currentBalance = await provider.getBalance(account);
    setBalance(Number(currentBalance.toString()));
  };

  return {
    balance,
    getBalance,
  };
};
