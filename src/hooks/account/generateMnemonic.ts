import { useEffect, useState } from 'react';
import { setStorageCurrentAccountIndex } from '../../storage/account/currentIndex';
import { setStorageAccountList } from '../../storage/account/list';
import { removeStorageMnemonic, setStorageMnemonic } from '../../storage/account/mnemonic';
import { createHDWalletFromMnemonic, createWallet } from '../../utils/createWallet';

export const useGenerateMnemonic = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [mnemonic, setMnemonic] = useState<string>('');

  useEffect(() => {
    const wallet = createWallet();
    setMnemonic(wallet.mnemonic.phrase);
    setIsLoading(false);
  }, []);

  const regenerateMnemonic = () => {
    setIsLoading(true);

    setTimeout(() => {
      const wallet = createWallet();
      setMnemonic(wallet.mnemonic.phrase);
      setIsLoading(false);
    }, 100);
  };

  const saveMnemonic = async () => {
    const result = await setStorageMnemonic(mnemonic);

    if (result) {
      const { address } = createHDWalletFromMnemonic(mnemonic);

      if (address) {
        const resultAccountList = await setStorageAccountList('main', address, 'mnemonic');
        resultAccountList && setStorageCurrentAccountIndex(0);
        !resultAccountList && removeStorageMnemonic();

        return resultAccountList;
      }
    }

    removeStorageMnemonic();
    return false;
  };

  return {
    isLoading,
    mnemonic,
    regenerate: regenerateMnemonic,
    saveMnemonic,
  };
};

export const useMnemonicHooks = () => {
  const saveMnemonic = async (mnemonic: string) => {
    const result = await setStorageMnemonic(mnemonic);

    if (result) {
      const { address } = createHDWalletFromMnemonic(mnemonic);

      if (address) {
        const resultAccountList = await setStorageAccountList('main', address, 'mnemonic');
        resultAccountList && setStorageCurrentAccountIndex(0);
        !resultAccountList && removeStorageMnemonic();

        return resultAccountList;
      }
    }

    removeStorageMnemonic();
    return false;
  };

  return {
    saveMnemonic,
  };
};
