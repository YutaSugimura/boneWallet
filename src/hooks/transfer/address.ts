import { useState } from 'react';

export const useAddress = () => {
  const [state, setState] = useState<string>('');

  return {
    toAddress: state,
    changeAddressValue: setState,
  };
};
