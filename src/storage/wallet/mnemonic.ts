import EncryptedStorage from 'react-native-encrypted-storage';

const KEY = 'MNEMONIC';

export const getStorageMnemonic = async () => {
  try {
    const session = await EncryptedStorage.getItem(KEY);
    if (session !== null) {
      return session;
    }

    return undefined;
  } catch {
    return undefined;
  }
};

export const setStorageMnemonic = async (newMnemonic: string) => {
  try {
    await EncryptedStorage.setItem(KEY, newMnemonic);
    return true;
  } catch {
    return false;
  }
};

export const removeStorageMnemonic = async () => {
  try {
    await EncryptedStorage.removeItem(KEY);
    return true;
  } catch {
    return false;
  }
};
