import { useCallback, useEffect, useState } from 'react';
import Clipboard from '@react-native-clipboard/clipboard';
import { useRecoilValue } from 'recoil';
import { exportPrivateKeyModalState } from '../../../recoil/atoms/ui';
import { getStoragePrivateKey } from '../../../storage/wallet/privatekey';

export const useExportPrivateKey = () => {
  const { isVisible, address, keyType } = useRecoilValue(exportPrivateKeyModalState);

  const [privateKey, setPrivateKey] = useState<string>();

  const copyToClipboard = useCallback(() => {
    if (privateKey) {
      Clipboard.setString(privateKey);
    }
  }, [privateKey]);

  useEffect(() => {
    let isMounted = true;

    (async () => {
      if (isVisible && address && keyType) {
        const storage = await getStoragePrivateKey(address);
        if (storage !== null) {
          isMounted && setPrivateKey(storage.secretkey);
        }
      }
    })();

    return () => {
      isMounted = false;
    };
  }, [isVisible, address, keyType]);

  return {
    address,
    privateKey,
    copyToClipboard,
  };
};
