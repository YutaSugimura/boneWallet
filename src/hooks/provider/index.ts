import { useEffect, useState } from 'react';
import type Ethers from 'ethers';
import type { Provider } from '../../types/ether';

export const useProviderCore = () => {
  const networkUrl: string = require('../../context/network/url').useNetworkUrlState().networkUrl;
  const [state, setState] = useState<Provider>(null);

  useEffect(() => {
    let isMounted = true;
    const setProvider = () => {
      const ethers: typeof Ethers = require('ethers');
      const newProvider = new ethers.providers.JsonRpcProvider(networkUrl);
      if (isMounted) setState(newProvider);
    };

    if (networkUrl !== '') {
      setProvider();
    }

    return () => {
      isMounted = false;
    };
  }, [networkUrl]);

  return {
    provider: state,
  };
};
