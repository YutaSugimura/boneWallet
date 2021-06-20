import React, { createContext, useContext } from 'react';
import { useNetworkUrlCore } from '../../hooks/network/url';

const StateContext = createContext<{ networkUrl: string }>({ networkUrl: '' });

const DispatchContext = createContext<{ changeNetworkUrl: (newValue: string) => void }>({
  changeNetworkUrl: (_) => {},
});

type Props = {
  children: React.ReactChild;
  initialState?: string;
};

const Provider: React.VFC<Props> = ({ children, initialState }) => {
  const { networkUrl, changeNetworkUrl } = useNetworkUrlCore(initialState);

  return (
    <StateContext.Provider value={{ networkUrl }}>
      <DispatchContext.Provider value={{ changeNetworkUrl }}>{children}</DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default Provider;

export const useNetworkUrlState = () => useContext(StateContext);
export const useNetworkUrlDispatch = () => useContext(DispatchContext);
