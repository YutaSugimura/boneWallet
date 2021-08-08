import EncryptedStorage from 'react-native-encrypted-storage';
import type { Secretkey, SecretKeyType } from '../../types/account';

const basekey = 'secretkey';

export const getStorageSecretkey = async (key: string): Promise<Secretkey | null> => {
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

export const setStorageSecretkey = async (
  key: string,
  secretkeyType: SecretKeyType,
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
    false;
  }
};

export const removeStorageSecretkey = async (key: string) => {
  try {
    await EncryptedStorage.removeItem(basekey + key);
    return true;
  } catch {
    return false;
  }
};
