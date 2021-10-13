// import { ethers } from 'ethers';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { currentNetworkState } from '../../recoil/atoms/network';
import { createProvider } from '../../utils/provider';

export const useBlockNumber = () => {
  const currentNetwork = useRecoilValue(currentNetworkState);

  useEffect(() => {
    const getBlockNumber = async () => {
      const provider = createProvider(currentNetwork);
      if (!provider) {
        return;
      }

      const blockNumber = await provider.getBlockNumber();
      console.log(blockNumber);
    };

    const interval = setInterval(() => getBlockNumber(), 3000);
    return () => clearInterval(interval);
  }, [currentNetwork]);
};
