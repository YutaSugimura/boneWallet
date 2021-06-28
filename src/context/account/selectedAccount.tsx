import React from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import { useSelectedAccountCore } from '../../hooks/account/selectedAccount';
import { Account } from '../../types/account';

const StateContext = createContext<{ selectedAccount: Account | null }>({
  selectedAccount: null,
});

const DispatchContext = createContext<{ changeAccount: (targetAccount: Account) => void }>({
  changeAccount: (_) => {},
});

type Props = {
  children: React.ReactChild;
};

const Provider: React.VFC<Props> = ({ children }) => {
  const { selectedAccount, changeAccount } = useSelectedAccountCore();

  return (
    <StateContext.Provider value={{ selectedAccount }}>
      <DispatchContext.Provider value={{ changeAccount }}>{children}</DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default Provider;

export const useSelectedAccountState = () => useContext(StateContext);
export const useSelectedAccountDispatch = () => useContext(DispatchContext);
