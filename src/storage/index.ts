import AsyncStorage from '@react-native-async-storage/async-storage';
import EncryptedStorage from 'react-native-encrypted-storage';

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
    return true;
  } catch {
    return false;
  }
};

export const clearEncryptedStorage = async () => {
  try {
    await EncryptedStorage.clear();
    return true;
  } catch {
    return false;
  }
};
