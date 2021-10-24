import { useEffect, useState } from 'react';
import { getStorageMnemonic } from '../../../storage/wallet/mnemonic';

export const useExportMnemonic = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [mnemonic, setMnemonic] = useState<string>();

  const getMnemonic = async () => {
    const storage = await getStorageMnemonic();
    if (storage !== null) {
      setMnemonic(storage);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getMnemonic();
  }, []);

  const refetch = () => {
    setIsLoading(true);

    setTimeout(() => {
      getMnemonic();
    }, 100);
  };

  return {
    isLoading,
    mnemonic,
    refetch,
  };
};
