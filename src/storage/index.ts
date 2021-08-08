import EncryptedStorage from 'react-native-encrypted-storage';

export const clearStorage = async () => {
  try {
    await EncryptedStorage.clear();
    return true;
  } catch {
    return true;
  }
};
