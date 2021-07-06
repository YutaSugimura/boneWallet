import { useEffect, useState } from 'react';
import type Ethers from 'ethers';
import type { Provider } from '../../types/ether';
import { useNetworkUrlState } from '../../context/network/url';

export const useProviderCore = () => {
  const networkUrl: string = useNetworkUrlState().networkUrl;

  const [state, setState] = useState<Provider>(null);

  useEffect(() => {
    let isMounted = true;

    const ethers: typeof Ethers = require('ethers');

    if (networkUrl !== '') {
      const newProvider = new ethers.providers.JsonRpcProvider(networkUrl);
      isMounted && setState(newProvider);
    }

    return () => {
      isMounted = false;
    };
  }, [networkUrl]);

  return {
    provider: state,
  };
};
