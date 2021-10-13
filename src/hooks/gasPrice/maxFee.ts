import { useCallback, useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { currentNetworkState } from '../../recoil/atoms/network';
import { maxFeeFormState } from '../../recoil/atoms/input/transfer';
import { createProvider } from '../../utils/provider';
import { formatUnits } from '../../utils/formatEther';

export const useMaxFee = () => {
  const [maxFee, setMaxFee] = useState<string>();

  const currentNetwork = useRecoilValue(currentNetworkState);
  const setMaxFeeForm = useSetRecoilState(maxFeeFormState);

  const getMaxFee = useCallback(async () => {
    const provider = createProvider(currentNetwork);
    if (!provider) {
      return;
    }

    const gasPrice = await provider.getGasPrice();
    const gweiGasPrice = formatUnits(gasPrice);
    const result =
      gweiGasPrice.length > 3
        ? String(Math.round(Number(gweiGasPrice) * 1000) / 1000)
        : gweiGasPrice;

    if (maxFee !== result) {
      setMaxFee(result);
      setMaxFeeForm(result);
    }
  }, [currentNetwork, maxFee, setMaxFeeForm]);

  useEffect(() => {
    getMaxFee();
  }, [getMaxFee]);

  return {
    gasPrice: maxFee,
  };
};
