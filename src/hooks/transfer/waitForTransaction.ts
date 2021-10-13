import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { currentNetworkState } from '../../recoil/atoms/network';
import { transactionStatus } from '../../recoil/atoms/transaction';
import { createProvider } from '../../utils/provider';

export const useWaitForTransaction = (txHash: string) => {
  const currentNetwork = useRecoilValue(currentNetworkState);
  const setStatus = useSetRecoilState(transactionStatus);

  useEffect(() => {
    (async () => {
      const provider = createProvider(currentNetwork);
      if (!provider) {
        return;
      }

      try {
        await provider.waitForTransaction(txHash);
        setStatus({ txHash, status: 'complete' });
      } catch {
        setStatus({ txHash, status: 'reject' });
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
