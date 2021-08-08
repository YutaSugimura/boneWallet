import { useEffect, useState } from 'react';
import { getStorageMnemonic } from '../../storage/account/mnemonic';

export const useMainAccount = () => {
  const [mnemonic, setMnemonic] = useState<string>('');

  useEffect(() => {
    (async () => {
      const storage = await getStorageMnemonic();
      if (storage !== null) {
        setMnemonic(storage);
      }
    })();
  }, []);

  return {
    mnemonic,
  };
};
