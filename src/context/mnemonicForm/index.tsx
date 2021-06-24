import React, { useContext, createContext } from 'react';
import type { Control, FormState, UseFormHandleSubmit } from 'react-hook-form';
import type { MnemonicFormData } from '../../types/form';
import { useMnemonicFormCore } from '../../hooks/account/setMnemonic';

const StateContext = createContext<{
  address: string;
  mnemonic: string;
  errors: string;
  control?: Control<MnemonicFormData>;
  formState?: FormState<MnemonicFormData>;
}>({
  address: '',
  mnemonic: '',
  errors: '',
});

const DispatchContext = createContext<{
  handleSubmit?: UseFormHandleSubmit<MnemonicFormData>;
  resetForm: () => void;
  onSubmit: (data: MnemonicFormData) => void;
}>({
  resetForm: () => {},
  onSubmit: (_) => {},
});

type Props = {
  children: React.ReactChild;
};

const Provider: React.VFC<Props> = ({ children }) => {
  const { address, mnemonic, errors, control, handleSubmit, formState, resetForm, onSubmit } =
    useMnemonicFormCore();

  return (
    <StateContext.Provider value={{ address, mnemonic, errors, control, formState }}>
      <DispatchContext.Provider value={{ handleSubmit, resetForm, onSubmit }}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default Provider;

export const useMnemonicFormState = () => useContext(StateContext);
export const useMnemonicFormDispatch = () => useContext(DispatchContext);
