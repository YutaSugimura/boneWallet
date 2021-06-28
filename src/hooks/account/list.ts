import { useState } from 'react';
import type { Accounts } from '../../types/account';

export const useAccountCore = (initialState: Accounts = []) => {
  const [state, setState] = useState<Accounts>(initialState);

  const setAccount = (address: string, label: string) => {
    setState([...state, { address, label }]);
  };

  const removeAccount = (address: string) => {
    const newList = state.filter((item) => item.address !== address);

    setState([...newList]);
  };

  const resetAccount = () => {
    setState([]);
  };

  return {
    account: state,
    setAccount,
    removeAccount,
    resetAccount,
  };
};
