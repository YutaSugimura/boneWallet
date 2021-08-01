import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { balanceState } from '../../recoil/atoms/balance';
import { useTransferFormState } from '../../context/transfer';
import { formatEther } from '../../utils/formatEther';

export const useCheckBalance = () => {
  const { amount } = useTransferFormState();
  const balance = useRecoilValue(balanceState);

  const [state, setState] = useState<boolean>(false);

  useEffect(() => {
    if (balance !== '' && Number(amount) !== 0) {
      setTimeout(() => {
        setState(Number(amount) < Number(formatEther(balance)));
      }, 1000);
    } else {
      setState(false);
    }
  }, [amount, balance]);

  return state;
};
