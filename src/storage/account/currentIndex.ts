import EncryptedStorage from 'react-native-encrypted-storage';

const key = 'currentIndex';

export const getStorageCurrentAccountIndex = async () => {
  try {
    const session = await EncryptedStorage.getItem(key);
    if (session && session !== null) {
      return Number(session);
    }

    return null;
  } catch {
    return null;
  }
};

export const setStorageCurrentAccountIndex = async (index: number) => {
  try {
    await EncryptedStorage.setItem(key, String(index));
    return true;
  } catch {
    return false;
  }
};

export const removeStorageCurrentAccountIndex = async () => {
  try {
    await EncryptedStorage.removeItem(key);
    return true;
  } catch {
    return false;
  }
};
