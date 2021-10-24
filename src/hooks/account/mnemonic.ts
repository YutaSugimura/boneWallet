import { useCallback, useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { isAccountState } from '../../recoil/atoms/account';
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

  const setState = useSetRecoilState(isAccountState);

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

  const saveMnemonic = async () => {
    const result = await setStorageMnemonic(mnemonic);

    if (result) {
      const { address } = createHDWalletFromMnemonic(mnemonic);

      if (address) {
        const resultAccountList = await setStorageAccountList('main', address, 'mnemonic');

        resultAccountList && setStorageCurrentAccountIndex(0);
        resultAccountList && setState({ isLoading: false, isAccount: true });
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

export const useExportMnemonic = () => {
  const [mnemonic, setMnemonic] = useState<string>('');

  const readMnemonic = async () => {
    const storage = await getStorageMnemonic();
    if (storage !== null) {
      setMnemonic(storage);
    }
  };

  return {
    mnemonic,
    readMnemonic,
  };
};
