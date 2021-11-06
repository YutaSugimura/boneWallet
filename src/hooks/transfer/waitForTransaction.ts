import { useEffect } from 'react';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { transactionModalStatus, transactionStatus } from '../../recoil/atoms/transaction';
import { useProvider } from '../wallet/provider';

export const useWaitForTransactionEffect = () => {
  const transactionValues = useRecoilValue(transactionStatus);
  const setStatus = useSetRecoilState(transactionStatus);
  const resetStatus = useResetRecoilState(transactionStatus);
  const resetModal = useResetRecoilState(transactionModalStatus);
  const { getProvider } = useProvider();

  useEffect(() => {
    if (transactionValues !== null && transactionValues.status === 'pending') {
      (async () => {
        const provider = getProvider();

        if (provider) {
          const { txHash } = transactionValues;

          try {
            await provider.waitForTransaction(txHash);
            setStatus({ txHash, status: 'complete' });

            setTimeout(() => {
              resetStatus();
              resetModal();
            }, 10000);
          } catch {
            setStatus({ txHash, status: 'reject' });
          }
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactionValues]);
};
