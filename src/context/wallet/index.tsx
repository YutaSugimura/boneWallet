import React, { useContext, createContext } from 'react';
import { useWalletCore } from '../../hooks/wallet';
import type { Wallet } from '../../types/wallet';

const StateContext = createContext<{ wallet: Wallet }>({ wallet: null });

const DispatchContext = createContext<{
  setWallet: (newWallet: Wallet) => void;
  resetWallet: () => void;
}>({ setWallet: (_) => {}, resetWallet: () => {} });

type Props = {
  children: React.ReactChild;
  initialState?: Wallet;
};

const Provider: React.VFC<Props> = ({ children, initialState }) => {
  const { wallet, setWallet, resetWallet } = useWalletCore(initialState);

  return (
    <StateContext.Provider value={{ wallet }}>
      <DispatchContext.Provider value={{ setWallet, resetWallet }}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default Provider;

export const useWalletState = () => useContext(StateContext);
export const useWalletDispatch = () => useContext(DispatchContext);
