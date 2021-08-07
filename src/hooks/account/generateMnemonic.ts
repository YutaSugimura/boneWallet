import { useEffect, useState } from 'react';
import { createWallet } from '../../utils/createWallet';

export const useGenerateMnemonic = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [mnemonic, setMnemonic] = useState<string>('');

  useEffect(() => {
    const wallet = createWallet();
    setMnemonic(wallet.mnemonic.phrase);
    setIsLoading(false);
  }, []);

  const generateMnemonic = () => {
    setIsLoading(true);

    setTimeout(() => {
      const wallet = createWallet();
      setMnemonic(wallet.mnemonic.phrase);
      setIsLoading(false);
    }, 100);
  };

  return {
    isLoading,
    mnemonic,
    generate: generateMnemonic,
  };
};
