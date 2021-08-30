import type Ethers from 'ethers';
import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { maxFeeFormState } from '../../recoil/atoms/input/transfer';
import { currentNetworkState } from '../../recoil/atoms/network';
import { createProvider } from '../../utils/provider';

const ethers: typeof Ethers = require('ethers');

export const useGasPrice = (isSetGlobalState = false) => {
  const [state, setState] = useState<string>('');

  const currentNetwork = useRecoilValue(currentNetworkState);
  const setMaxFee = useSetRecoilState(maxFeeFormState);

  useEffect(() => {
    (async () => {
      const provider = createProvider(currentNetwork);
      if (!provider) {
        return;
      }

      const gasPrice = await provider.getGasPrice();
      const gweiGasPrice = ethers.utils.formatUnits(gasPrice, 'gwei');
      const result =
        gweiGasPrice.length > 3
          ? String(Math.round(Number(gweiGasPrice) * 1000) / 1000)
          : gweiGasPrice;
      setState(result);

      isSetGlobalState && setMaxFee(result);
    })();
  }, [currentNetwork, currentNetwork.type, isSetGlobalState, setMaxFee]);

  return {
    gasPrice: state,
  };
};
