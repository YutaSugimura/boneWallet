import type Ethers from 'ethers';
import { useEffect, useMemo, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { currentNetworkState } from '../../recoil/atoms/network';
import { currentAccountState } from '../../recoil/selector/currentAccount';

const ethers: typeof Ethers = require('ethers');

export const useBalance = () => {
  const currentNetwork = useRecoilValue(currentNetworkState);
  const currentAccount = useRecoilValue(currentAccountState);
  const [state, setState] = useState<string>('');

  useEffect(() => {
    let isMounted = true;
    (async () => {
      if (currentAccount.address !== '') {
        if (currentNetwork.type === 'basic') {
          const provider = ethers.getDefaultProvider(currentNetwork.network);
          const balance = await provider.getBalance(currentAccount.address);
          isMounted && setState(ethers.utils.formatEther(balance));
        } else if (currentNetwork.type === 'custom') {
          const provider = new ethers.providers.JsonRpcProvider(currentNetwork.url);
          const balance = await provider.getBalance(currentAccount.address);
          isMounted && setState(ethers.utils.formatEther(balance));
        }
      }
    })();

    return () => {
      isMounted = false;
    };
  }, [currentNetwork, currentAccount.address, currentAccount.currentIndex]);

  return useMemo(() => state, [state]);
};
