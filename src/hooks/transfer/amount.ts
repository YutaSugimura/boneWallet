import { useState } from 'react';

export const useAmount = () => {
  const [state, setState] = useState<string>('0');

  return {
    amount: state,
    changeAmountValue: setState,
  };
};
