import React from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import type { Control, FormState, UseFormHandleSubmit } from 'react-hook-form';
import type { PrivateKeyFormData } from '../../types/form';
import { usePrivateKeyFormCore } from '../../hooks/account/setPrivateKey';

const StateContext = createContext<{
  address: string;
  privateKey: string;
  errors: string;
  control?: Control<PrivateKeyFormData>;
  formState?: FormState<PrivateKeyFormData>;
}>({
  address: '',
  privateKey: '',
  errors: '',
});

const DispatchContext = createContext<{
  handleSubmit?: UseFormHandleSubmit<PrivateKeyFormData>;
  resetForm: () => void;
  onSubmit: (data: PrivateKeyFormData) => void;
}>({
  resetForm: () => {},
  onSubmit: (_) => {},
});

type Props = {
  children: React.ReactChild;
};

const Provider: React.VFC<Props> = ({ children }) => {
  const { address, privateKey, errors, control, handleSubmit, formState, resetForm, onSubmit } =
    usePrivateKeyFormCore();

  return (
    <StateContext.Provider value={{ address, privateKey, errors, control, formState }}>
      <DispatchContext.Provider value={{ handleSubmit, resetForm, onSubmit }}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default Provider;

export const usePrivateKeyFormState = () => useContext(StateContext);
export const usePrivateKeyFormDispatch = () => useContext(DispatchContext);
