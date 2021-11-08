import EncryptedStorage from 'react-native-encrypted-storage';
import { InfuraKeyData } from '../../types/infuraKey';

const KEY = 'INFURA_KEY';

export const getStorageInfuraKey = async () => {
  try {
    const session = await EncryptedStorage.getItem(KEY);
    if (session !== null) {
      return JSON.parse(session) as InfuraKeyData;
    }
  } catch {}
};

export const setStorageInfuraKey = async (projectId: string, projectSecret: string) => {
  try {
    await EncryptedStorage.setItem(
      KEY,
      JSON.stringify({ projectId, projectSecret } as InfuraKeyData),
    );
    return true;
  } catch {
    return false;
  }
};

export const removeStorageInfuraKey = async () => {
  try {
    await EncryptedStorage.removeItem(KEY);
    return true;
  } catch {
    return false;
  }
};
