import React, { createContext } from 'react';
import { useContext } from 'react';
import { useSendAmount, useToAddress } from '../../hooks/transfer/form';

const StateContext = createContext<{ to: string; amount: string }>({ to: '', amount: '0' });

const DispatchContext = createContext<{
  changeToAddress: (newValue: string) => void;
  changeSendAmount: (newValue: string) => void;
}>({
  changeToAddress: (_) => {},
  changeSendAmount: (_) => {},
});

type Props = {
  children: React.ReactChild;
  initialState?: { address: string; amount: string };
};

const Provider: React.VFC<Props> = ({ children, initialState }) => {
  const { to, changeToAddress } = useToAddress(initialState?.address);
  const { amount, changeSendAmount } = useSendAmount(initialState?.amount);

  return (
    <StateContext.Provider value={{ to, amount }}>
      <DispatchContext.Provider value={{ changeToAddress, changeSendAmount }}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default Provider;

export const useTransferFormState = () => useContext(StateContext);
export const useTransferFormDispatch = () => useContext(DispatchContext);
