import { useState } from 'react';
import type Ethers from 'ethers';
import { useNetworkUrlState } from '../context/network/url';

export const useBalance = () => {
  const networkUrl = useNetworkUrlState().networkUrl;
  const [balance, setBalance] = useState<number>(0);

  const getBalance = async (account: string) => {
    const ethers: typeof Ethers = require('ethers');
    const provider = new ethers.providers.JsonRpcProvider(networkUrl);
    const currentBalance = await provider.getBalance(account);
    setBalance(Number(currentBalance.toString()));
  };

  return {
    balance,
    getBalance,
  };
};
