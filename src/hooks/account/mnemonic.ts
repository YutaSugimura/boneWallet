import { useCallback, useEffect, useMemo, useState } from 'react';
import { setStorageCurrentAccountIndex } from '../../storage/account/currentIndex';
import { setStorageAccountList } from '../../storage/account/list';
import {
  getStorageMnemonic,
  removeStorageMnemonic,
  setStorageMnemonic,
} from '../../storage/account/mnemonic';
import { createHDWalletFromMnemonic, createWallet } from '../../utils/createWallet';

export const useGenerateMnemonic = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [mnemonic, setMnemonic] = useState<string>('');

  const generateMnemonic = async () => {
    const wallet = await createWallet();
    setMnemonic(wallet.mnemonic.phrase);
    return wallet.mnemonic.phrase;
  };

  useEffect(() => {
    generateMnemonic();
    setIsLoading(false);
  }, []);

  const regenerateMnemonic = useCallback(() => {
    setIsLoading(true);

    setTimeout(() => {
      generateMnemonic();
      setIsLoading(false);
    }, 100);
  }, []);

  const saveMnemonic = useCallback(async () => {
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
  }, [mnemonic]);

  const data = useMemo(
    () => ({
      isLoading,
      mnemonic,
    }),
    [isLoading, mnemonic],
  );

  return {
    ...data,
    regenerate: regenerateMnemonic,
    saveMnemonic,
  };
};

export const useExportMnemonic = () => {
  const [mnemonic, setMnemonic] = useState<string>('');

  const readMnemonic = useCallback(async () => {
    const storage = await getStorageMnemonic();
    if (storage !== null) {
      setMnemonic(storage);
    }
  }, []);

  const data = useMemo(() => mnemonic, [mnemonic]);

  return {
    mnemonic: data,
    readMnemonic,
  };
};

export const useMnemonicHooks = () => {
  const saveMnemonic = useCallback(async (mnemonic: string) => {
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
  }, []);

  return {
    saveMnemonic,
  };
};
