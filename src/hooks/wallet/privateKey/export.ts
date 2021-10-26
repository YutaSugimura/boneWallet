import { useEffect, useState } from 'react';
import { useClipboard } from '@react-native-community/hooks';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { exportPrivateKeyModalState, loadingState } from '../../../recoil/atoms/ui';
import { createHDWalletFromMnemonic } from '../../../libs/wallet';
import { getStoragePrivateKey } from '../../../storage/wallet/privatekey';
import { getStorageMnemonic } from '../../../storage/wallet/mnemonic';

export const useExportPrivateKey = () => {
  const [, setString] = useClipboard();

  const { isVisible, address, keyType } = useRecoilValue(exportPrivateKeyModalState);
  const resetLoadingState = useResetRecoilState(loadingState);

  const [privateKey, setPrivateKey] = useState<string>();

  const setClipboard = () => {
    if (privateKey) {
      setString(privateKey);
    }
  };

  useEffect(() => {
    let isMounted = true;

    (async () => {
      if (isVisible && address && keyType) {
        if (keyType === 'privatekey') {
          const storage = await getStoragePrivateKey(address);
          if (storage !== null) {
            isMounted && setPrivateKey(storage.secretkey);
          }
        }

        if (keyType === 'mnemonic') {
          const storage = await getStorageMnemonic();

          if (storage) {
            const wallet = createHDWalletFromMnemonic(storage);
            if ('privatekey' in wallet) {
              isMounted && setPrivateKey(wallet.privatekey);
            }
          }

          resetLoadingState();
        }
      }
    })();

    return () => {
      isMounted = false;
    };
  }, [isVisible, address, keyType, resetLoadingState]);

  return {
    address,
    privateKey,
    setClipboard,
  };
};
