import { useEffect, useState } from 'react';
import { useAccountState } from '../../context/account';
import type { Account } from '../../types/account';

export const useSelectedAccountCore = () => {
  const { account } = useAccountState();
  const [state, setState] = useState<Account | null>(null);

  useEffect(() => {
    // ToDo: Set a previously selected account at startup.
    if (state === null && account.length > 0) {
      setState(account[0]);
    } else if (state !== null && account.length === 0) {
      setState(null);
    }
  }, [account.length, state]);

  const changeAccount = (targetAccount: Account) => {
    setState(targetAccount);
  };

  return {
    selectedAccount: state,
    changeAccount,
  };
};
