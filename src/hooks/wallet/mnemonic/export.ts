import { useState } from 'react';
import { useClipboard } from '@react-native-community/hooks';
import { getStorageMnemonic } from '../../../storage/wallet/mnemonic';

export const useExportMnemonic = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [mnemonic, setMnemonic] = useState<string>();
  const [, setString] = useClipboard();

  const getMnemonic = async () => {
    const storage = await getStorageMnemonic();

    if (storage !== null) {
      setMnemonic(storage);
    }

    setIsLoading(false);
  };

  const clipboard = () => {
    if (!mnemonic) {
      return;
    }

    setString(mnemonic);
  };

  return {
    isLoading,
    mnemonic,
    get: getMnemonic,
    clipboard,
  };
};
