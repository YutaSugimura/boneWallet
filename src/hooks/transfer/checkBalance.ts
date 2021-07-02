import { useEffect, useState } from 'react';
import { useTransferFormState } from '../../context/transfer';
import { formatEther } from '../../utils/formatEther';
import { useBalance } from '../wallet/balance';

export const useCheckBalance = () => {
  const { amount } = useTransferFormState();
  const { balance } = useBalance();

  const [state, setState] = useState<boolean>(false);

  useEffect(() => {
    if (balance !== null && Number(amount) !== 0) {
      setTimeout(() => {
        setState(Number(amount) < Number(formatEther(balance)));
      }, 1000);
    } else {
      setState(false);
    }
  }, [amount, balance]);

  return state;
};
