import AsyncStorage from '@react-native-async-storage/async-storage';
import type { NetworkName, NetworkType } from '../../types/network';

const KEY = 'currentNetwork';

export const getStorageCurrentNetwork = async () => {
  try {
    const value = await AsyncStorage.getItem(KEY);
    return value != null
      ? (JSON.parse(value) as { type: NetworkType; networkName: NetworkName })
      : null;
  } catch {
    return null;
  }
};

export const setStorageCurrentNetwork = async (type: NetworkType, networkName: NetworkName) => {
  try {
    await AsyncStorage.setItem(KEY, JSON.stringify({ type, networkName }));
    return true;
  } catch {
    return false;
  }
};

export const removeStorageCurrentNetwork = async () => {
  try {
    await AsyncStorage.removeItem(KEY);
    return true;
  } catch {
    return false;
  }
};
