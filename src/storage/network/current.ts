import EncryptedStorage from 'react-native-encrypted-storage';

const key = 'currentNetworkIndex';

export const getStorageCurrentNetworkIndex = async () => {
  try {
    const session = await EncryptedStorage.getItem(key);
    if (session && session !== null) {
      return Number(session);
    }

    return 0;
  } catch {
    return 0;
  }
};

export const setStorageCurrentNetworkIndex = async (index: number) => {
  try {
    await EncryptedStorage.setItem(key, String(index));
    return true;
  } catch {
    return false;
  }
};

export const removeStorageCurrentNetworkIndex = async () => {
  try {
    await EncryptedStorage.removeItem(key);
    return true;
  } catch {
    return false;
  }
};
