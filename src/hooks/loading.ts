import { useCallback, useState } from 'react';

export const useIsLoading = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toggle = useCallback((bool?: boolean) => {
    setIsLoading(bool ? bool : (prev) => !prev);
  }, []);

  return {
    isLoading,
    toggle,
  };
};
