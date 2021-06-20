import { useCallback } from 'react';
import { useState } from 'react';

export const useNetworkUrlCore = (initialState: string = '') => {
  const [networkUrl, setNetworkUrl] = useState<string>(initialState);

  const changeNetworkUrl = useCallback((newNetworkUrl: string) => {
    setNetworkUrl(newNetworkUrl);
  }, []);

  return {
    networkUrl,
    changeNetworkUrl,
  };
};
