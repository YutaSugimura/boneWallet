import React, { createContext, useContext } from 'react';
import { useAccountCore } from '../../hooks/account/list';
import type { Accounts } from '../../types/account';

const StateContext = createContext<{ account: Accounts }>({ account: [] });

const DispatchContext = createContext<{
  setAccount: (address: string, privateKey: string, label: string) => void;
  removeAccount: (address: string) => void;
  resetAccount: () => void;
}>({
  setAccount: (_, __, ___) => {},
  removeAccount: (_) => {},
  resetAccount: () => {},
});

type Props = {
  children: React.ReactChild;
  initialState?: Accounts;
};

const Provider: React.VFC<Props> = ({ children, initialState }) => {
  const { account, setAccount, removeAccount, resetAccount } = useAccountCore(initialState);

  return (
    <StateContext.Provider value={{ account }}>
      <DispatchContext.Provider value={{ setAccount, removeAccount, resetAccount }}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default Provider;

export const useAccountState = () => useContext(StateContext);
export const useAccountDispatch = () => useContext(DispatchContext);
