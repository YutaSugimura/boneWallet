import React, { createContext, useContext } from 'react';
import type { Provider as JsonRPCProvider } from '../../types/ether';
import { useProviderCore } from '../../hooks/provider';

const StateContext = createContext<JsonRPCProvider>(null);

type Props = {
  children: React.ReactChild;
};

const Provider: React.VFC<Props> = ({ children }) => {
  const { provider } = useProviderCore();

  return <StateContext.Provider value={provider}>{children}</StateContext.Provider>;
};

export default Provider;

export const useProviderState = () => useContext(StateContext);
