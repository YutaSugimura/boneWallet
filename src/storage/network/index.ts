import EncryptedStorage from 'react-native-encrypted-storage';
import type { CustomNetworkList } from '../../types/network';

const key = 'networkList';

export const getStorageCustomNetworkList = async () => {
  try {
    const session = await EncryptedStorage.getItem(key);
    if (session && session !== null) {
      return JSON.parse(session) as CustomNetworkList;
    }

    return [];
  } catch {
    return [];
  }
};

export const setStorageCustomNetworkList = async (list: CustomNetworkList) => {
  try {
    await EncryptedStorage.setItem(key, JSON.stringify(list));
    return true;
  } catch {
    return false;
  }
};

export const addStorageCustomNetworkList = async (label: string, url: string) => {
  try {
    const list = await getStorageCustomNetworkList();
    if (list.length > 0) {
      list.push({ label, url, type: 'custom' });
      await EncryptedStorage.setItem(key, JSON.stringify(list));
      return true;
    }

    return await setStorageCustomNetworkList([{ label, url, type: 'custom' }]);
  } catch {
    return false;
  }
};

export const removeStorageCustomNetworkList = async () => {
  try {
    await EncryptedStorage.removeItem(key);
    return true;
  } catch {
    return false;
  }
};
