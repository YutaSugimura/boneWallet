import { useCallback, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { accountListState } from '../../recoil/atoms/account';
import { setStorageCurrentAccountIndex } from '../../storage/account/currentIndex';
import { getStorageAccountList, setStorageAccountList } from '../../storage/account/list';
import { setStorageSecretkey } from '../../storage/account/secretkey';
import type { SecretKeyType } from '../../types/account';

export const useAccountlist = () => {
  const state = useRecoilValue(accountListState);
  const setState = useSetRecoilState(accountListState);

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
      return await setStorageCurrentAccountIndex(newIndex);
    },
    [state],
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
