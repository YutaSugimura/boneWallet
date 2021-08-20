import { useCallback, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { accountListState, currentAccountIndexState } from '../../recoil/atoms/account';
import {
  getStorageCurrentAccountIndex,
  setStorageCurrentAccountIndex,
} from '../../storage/account/currentIndex';
import { getStorageAccountList, setStorageAccountList } from '../../storage/account/list';
import { setStorageSecretkey } from '../../storage/account/secretkey';
import type { SecretKeyType } from '../../types/account';

export const useAccountlist = () => {
  const state = useRecoilValue(accountListState);
  const setState = useSetRecoilState(accountListState);
  const setCurrentAccountIndex = useSetRecoilState(currentAccountIndexState);

  const addAccountList = useCallback(
    async (label: string, secretkeyType: SecretKeyType, address: string, secretkey: string) => {
      if (secretkeyType === 'privatekey') {
        const result = await setStorageSecretkey(address, secretkeyType, secretkey);

        if (result) {
          const resultList = await setStorageAccountList(label, address, secretkeyType);
          if (resultList) {
            const currentAccountList = await getStorageAccountList();
            setState([...currentAccountList]);
            return currentAccountList;
          }
        }
        return result;
      }
      return false;
    },
    [setState],
  );

  const onChangeAccount = useCallback(
    async (address: string) => {
      const newIndex = state.findIndex((item) => item.address === address);
      setCurrentAccountIndex(newIndex);
      return await setStorageCurrentAccountIndex(newIndex);
    },
    [state, setCurrentAccountIndex],
  );

  return {
    addAccountList,
    onChangeAccount,
  };
};

export const useAccountlistEffect = () => {
  const setState = useSetRecoilState(accountListState);

  useEffect(() => {
    (async () => {
      const accountList = await getStorageAccountList();
      setState([...accountList]);
    })();
  }, [setState]);
};

export const useStartupCurrentAccountIndex = () => {
  const setState = useSetRecoilState(currentAccountIndexState);

  useEffect(() => {
    (async () => {
      const storage = await getStorageCurrentAccountIndex();
      storage !== null && setState(storage);
    })();
  }, [setState]);
};
