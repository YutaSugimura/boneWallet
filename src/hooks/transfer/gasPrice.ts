import type Ethers from 'ethers';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { currentNetworkState } from '../../recoil/atoms/network';
import { createProvider } from '../../utils/provider';

const ethers: typeof Ethers = require('ethers');

export const useGasPrice = () => {
  const [state, setState] = useState<string>('');

  const currentNetwork = useRecoilValue(currentNetworkState);

  useEffect(() => {
    (async () => {
      const provider = createProvider(currentNetwork);
      if (!provider) {
        return;
      }

      const gasPrice = await provider.getGasPrice();
      const gweiGasPrice = ethers.utils.formatUnits(gasPrice, 'gwei');
      setState(
        gweiGasPrice.length > 3
          ? String(Math.round(Number(gweiGasPrice) * 1000) / 1000)
          : gweiGasPrice,
      );
    })();
  }, [currentNetwork, currentNetwork.type]);

  return {
    gasPrice: state,
  };
};
