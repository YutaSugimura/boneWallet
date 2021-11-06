import { useEffect } from 'react';
import { ethers } from 'ethers';
import { useSetRecoilState } from 'recoil';
import { feeState } from '../../recoil/atoms/fee';
import { useProvider } from './provider';
import type { FeeData } from '../../types/fee';

export const useGasPriceEffect = () => {
  const { getProvider } = useProvider();

  const setState = useSetRecoilState(feeState);

  useEffect(() => {
    (async () => {
      const provider = getProvider();

      if (provider !== null) {
        const interval = setInterval(async () => {
          const data = await provider.getFeeData();
          const _gasPrice = data.gasPrice;
          const _maxPriorityFeePerGas = data.maxPriorityFeePerGas;

          const feeData: FeeData = { baseFee: 0, priorityFee: 0, maxFee: 0 };

          if (_gasPrice) {
            const gasPrice = ethers.utils.formatUnits(_gasPrice, 'gwei');
            feeData.baseFee = Math.round(Number(gasPrice) * 1000) / 1000;
            feeData.maxFee = feeData.baseFee + 10;
          }

          if (_maxPriorityFeePerGas) {
            const maxPriorityFeePerGas = ethers.utils.formatUnits(_maxPriorityFeePerGas, 'gwei');
            feeData.priorityFee = Math.round(Number(maxPriorityFeePerGas) * 1000) / 1000;
          }

          setState(feeData);
        }, 10000);

        return () => clearInterval(interval);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
