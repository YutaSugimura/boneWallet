import EncryptedStorage from 'react-native-encrypted-storage';
import type { Secretkey, KeyType } from '../../types/wallet';

const basekey = 'privatekey';

export const getStoragePrivateKey = async (key: string): Promise<Secretkey | null> => {
  try {
    const session = await EncryptedStorage.getItem(basekey + key);
    if (session && session !== null) {
      return { ...(JSON.parse(session) as Secretkey) };
    }
    return null;
  } catch {
    return null;
  }
};

export const setStoragePrivateKey = async (
  key: string,
  secretkeyType: KeyType,
  secretkey: string,
) => {
  try {
    const newData: Secretkey = {
      key,
      secretkeyType,
      secretkey,
    };
    await EncryptedStorage.setItem(basekey + key, JSON.stringify(newData));
    return true;
  } catch {
    return false;
  }
};

export const removeStoragePrivateKey = async (key: string) => {
  try {
    await EncryptedStorage.removeItem(basekey + key);
    return true;
  } catch {
    return false;
  }
};
