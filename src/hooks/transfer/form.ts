import { useCallback, useMemo, useState } from 'react';

export const useToAddress = (initialState = '') => {
  const [state, setState] = useState<string>(initialState);

  const changeToAddress = useCallback((newValue: string) => {
    setState(newValue);
  }, []);

  return {
    to: useMemo(() => state, [state]),
    changeToAddress,
  };
};

export const useSendAmount = (initialState = '') => {
  const [state, setState] = useState<string>(initialState);

  const changeSendAmount = useCallback((newValue: string) => {
    setState(newValue);
  }, []);

  return {
    amount: useMemo(() => state, [state]),
    changeSendAmount,
  };
};
