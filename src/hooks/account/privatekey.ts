import { useCallback, useMemo, useState } from 'react';
import { getStorageSecretkey } from '../../storage/account/secretkey';

export const useExportPrivatekey = () => {
  const [privatekey, setPrivatekey] = useState<string>('');

  const readPrivatekey = useCallback(
    (address: string) => async () => {
      const storage = await getStorageSecretkey(address);
      if (storage === null) {
        return;
      }

      if (storage.secretkey) {
        setPrivatekey(storage.secretkey);
      }
    },
    [],
  );

  return {
    privatekey: useMemo(() => privatekey, [privatekey]),
    readPrivatekey,
  };
};
