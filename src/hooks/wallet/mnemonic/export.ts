import { useState } from 'react';
import Clipboard from '@react-native-clipboard/clipboard';
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

  const copyToClipboard = () => {
    if (mnemonic) {
      Clipboard.setString(mnemonic);
    }
  };

  return {
    isLoading,
    mnemonic,
    get: getMnemonic,
    copyToClipboard,
  };
};
