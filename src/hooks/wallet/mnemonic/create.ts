import { useEffect, useState } from 'react';
import Clipboard from '@react-native-clipboard/clipboard';
import { useSetRecoilState } from 'recoil';
import { isWalletState } from '../../../recoil/atoms/wallet';
import { createWallet } from '../../../libs/wallet';
import { setStorageAddressListItem } from '../../../storage/wallet/list';
import { removeStorageMnemonic, setStorageMnemonic } from '../../../storage/wallet/mnemonic';
import { setStoragePrivateKey } from '../../../storage/wallet/privatekey';

export const useGenerateMnemonic = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [address, setAddress] = useState<string>();
  const [mnemonic, setMnemonic] = useState<string>();
  const [privateKey, setPrivateKey] = useState<string>();
  const [message, setMessage] = useState<string>();

  const setIsWallet = useSetRecoilState(isWalletState);

  const generateMnemonic = async () => {
    const wallet = await createWallet();
    const { mnemonic, address, privateKey } = wallet;

    setMnemonic(mnemonic.phrase);
    setAddress(address);
    setPrivateKey(privateKey);
    setIsLoading(false);
  };

  useEffect(() => {
    generateMnemonic();
  }, []);

  const saveMnemonic = async () => {
    if (!mnemonic || !privateKey || !address) {
      return;
    }

    const resultSetMnemonic = await setStorageMnemonic(mnemonic);
    const resultSetStoragePrivateKey = await setStoragePrivateKey(
      address,
      'privatekey',
      privateKey,
    );

    if (resultSetMnemonic && resultSetStoragePrivateKey) {
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

  const copyToClipboard = () => {
    if (mnemonic) {
      Clipboard.setString(mnemonic);
    }
  };

  return {
    isLoading,
    mnemonic,
    message,
    saveMnemonic,
    refetch,
    copyToClipboard,
  };
};
