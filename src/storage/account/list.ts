import EncryptedStorage from 'react-native-encrypted-storage';
import type { AccountList, AccountListItem, SecretKeyType } from '../../types/account';

const key = 'account_list';

export const getStorageAccountList = async (): Promise<AccountList> => {
  try {
    const session = await EncryptedStorage.getItem(key);
    if (session && session !== null) {
      return JSON.parse(session) as AccountList;
    }
    return [];
  } catch {
    return [];
  }
};

export const setStorageAccountList = async (
  label: string,
  address: string,
  secretkeyType?: SecretKeyType,
) => {
  try {
    const newData: AccountListItem = {
      label,
      secretkeyType: secretkeyType ?? 'privatekey',
      address,
    };

    const currentList = await getStorageAccountList();
    if (currentList.length > 0) {
      const index = currentList.findIndex((item) => item.address === newData.address);

      if (index === -1) {
        await EncryptedStorage.setItem(key, JSON.stringify([...currentList, newData]));
        return true;
      } else if (index === 0) {
        return false;
      }

      currentList[index] = newData;
      await EncryptedStorage.setItem(key, JSON.stringify(currentList));
      return true;
    }

    await EncryptedStorage.setItem(key, JSON.stringify([newData]));
    return true;
  } catch {
    return false;
  }
};

export const removeStorageAccountList = async () => {
  try {
    await EncryptedStorage.removeItem(key);
    return true;
  } catch {
    return false;
  }
};
