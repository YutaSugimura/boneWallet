import React, { createContext, useContext } from 'react';
import type { Provider as EthereumProvider } from '../../types/ether';
import { useProviderCore } from '../../hooks/provider';

const StateContext = createContext<EthereumProvider>(null);
const DispatchContext = createContext<{
  setBaseProvider: (network: string) => void;
  setJsonRpcProvider: (customUrl: string) => void;
}>({
  setBaseProvider: (_) => {},
  setJsonRpcProvider: (_) => {},
});

type Props = {
  children: React.ReactChild;
  initialState?: EthereumProvider;
};

const Provider: React.VFC<Props> = ({ children, initialState }) => {
  const { provider, setBaseProvider, setJsonRpcProvider } = useProviderCore(initialState);

  return (
    <StateContext.Provider value={provider}>
      <DispatchContext.Provider value={{ setBaseProvider, setJsonRpcProvider }}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default Provider;

export const useProviderState = () => useContext(StateContext);
export const useProviderDispatch = () => useContext(DispatchContext);
