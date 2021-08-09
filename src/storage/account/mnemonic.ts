import EncryptedStorage from 'react-native-encrypted-storage';

const key = 'mnemonic';

export const getStorageMnemonic = async () => {
  try {
    const session = await EncryptedStorage.getItem(key);
    return session;
  } catch {
    return null;
  }
};

export const setStorageMnemonic = async (newMnemonic: string) => {
  try {
    await EncryptedStorage.setItem(key, newMnemonic);
    return true;
  } catch {
    return false;
  }
};

export const removeStorageMnemonic = async () => {
  try {
    await EncryptedStorage.removeItem(key);
    return true;
  } catch {
    return false;
  }
};
