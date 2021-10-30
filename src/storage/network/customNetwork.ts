import EncryptedStorage from 'react-native-encrypted-storage';
import type { CustomNetworkList } from '../../types/network';

const KEY = 'CUSTOM_NETWORK_LIST';

export const getStorageCustomNetworkList = async (): Promise<CustomNetworkList> => {
  try {
    const session = await EncryptedStorage.getItem(KEY);
    if (session && session !== null) {
      return JSON.parse(session) as CustomNetworkList;
    }
    return [];
  } catch {
    return [];
  }
};

export const setStorageCustomNetworkList = async (newList: CustomNetworkList): Promise<boolean> => {
  try {
    await EncryptedStorage.setItem(KEY, JSON.stringify(newList));
    return true;
  } catch {
    return false;
  }
};

export const removeStorageCustomNetworkList = async (): Promise<boolean> => {
  try {
    await EncryptedStorage.removeItem(KEY);
    return true;
  } catch {
    return false;
  }
};
