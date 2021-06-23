import { useState } from 'react';

export const useAddress = () => {
  const [state, setState] = useState<string>('');

  return {
    address: state,
    changeAddressValue: setState,
  };
};
