import { useEffect, useState } from 'react';
import { useSelectedAccountState } from '../../context/account/selectedAccount';
import { useProviderState } from '../../context/provider';
import type { Provider } from '../../types/ether';

export const useBalance = () => {
  const provider: Provider = useProviderState();
  const { selectedAccount } = useSelectedAccountState();

  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    const func = async () => {
      if (provider !== null && selectedAccount !== null) {
        const currentBalance = await provider.getBalance(selectedAccount.address);
        setBalance(Number(currentBalance.toString()));
      }
    };

    func();
  }, [provider, selectedAccount]);

  return {
    balance,
  };
};
