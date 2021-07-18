import { useState } from 'react';
import type Ethers from 'ethers';
import type { Provider } from '../../types/ether';

export const useProviderCore = (initialState: Provider = null) => {
  const [state, setState] = useState<Provider>(initialState);

  const setBaseProvider = (network: string) => {
    if (network === '') return;

    const ethers: typeof Ethers = require('ethers');

    const newProvider = ethers.getDefaultProvider(network);
    setState(newProvider);
  };

  const setJsonRpcProvider = (customUrl: string) => {
    if (customUrl === '') return;

    const ethers: typeof Ethers = require('ethers');
    const newProvider = new ethers.providers.JsonRpcProvider(customUrl);
    setState(newProvider);
  };

  return {
    provider: state,
    setBaseProvider,
    setJsonRpcProvider,
  };
};
