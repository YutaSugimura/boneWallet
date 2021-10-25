import { useEffect, useState } from 'react';
import { useClipboard } from '@react-native-community/hooks';
import { useSetRecoilState } from 'recoil';
import { isWalletState } from '../../../recoil/atoms/wallet';
import { createWallet } from '../../../libs/wallet';
import { setStorageAddressListItem } from '../../../storage/wallet/list';
import { removeStorageMnemonic, setStorageMnemonic } from '../../../storage/wallet/mnemonic';

export const useGenerateMnemonic = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [mnemonic, setMnemonic] = useState<string | undefined>(undefined);
  const [address, setAddress] = useState<string>('');
  const [message, setMessage] = useState<string | undefined>();

  const [, setString] = useClipboard();

  const setIsWallet = useSetRecoilState(isWalletState);

  const generateMnemonic = async () => {
    const wallet = await createWallet();
    const { mnemonic, address } = wallet;

    setMnemonic(mnemonic.phrase);
    setAddress(address);
    setIsLoading(false);
  };

  useEffect(() => {
    generateMnemonic();
  }, []);

  const saveMnemonic = async () => {
    if (!mnemonic) {
      return;
    }

    const result = await setStorageMnemonic(mnemonic);
    if (result) {
      const message = await setStorageAddressListItem({
        label: 'main',
        address,
        keyType: 'mnemonic',
      });

      if (message === 'ok') {
        setIsWallet({ isLoading: false, isWallet: true });
        return;
      }

      // Error
      setMessage(message);
      await removeStorageMnemonic();
      return;
    }
  };

  const refetch = async () => {
    setIsLoading(true);

    setTimeout(() => {
      generateMnemonic();
    }, 100);
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
    message,
    saveMnemonic,
    refetch,
    clipboard,
  };
};
