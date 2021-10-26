import EncryptedStorage from 'react-native-encrypted-storage';
import type { AddressList, AddressListItem } from '../../types/wallet';

const KEY = 'ADDRESS_LIST';

export const getStorageAddressList = async (): Promise<AddressList> => {
  try {
    const session = await EncryptedStorage.getItem(KEY);
    if (session && session !== null) {
      return JSON.parse(session) as AddressList;
    }
    return [];
  } catch {
    return [];
  }
};

export const setStorageAddressListItem = async (newItem: AddressListItem) => {
  try {
    const currentList = await getStorageAddressList();
    if (currentList.length > 0) {
      const index = currentList.findIndex((item) => item.address === newItem.address);
      if (index !== -1) {
        return 'This address has already been added';
      }

      await EncryptedStorage.setItem(KEY, JSON.stringify([...currentList, newItem]));
      return 'ok';
    }

    const newData: AddressListItem = {
      ...newItem,
      selected: true,
    };
    await EncryptedStorage.setItem(KEY, JSON.stringify([newData]));
    return 'ok';
  } catch {
    return 'Could not save to local storage';
  }
};

export const updateStorageSelectedAddress = async (targetAddress: string) => {
  try {
    const currentList = await getStorageAddressList();
    if (currentList.length === 0) {
      return false;
    }

    const newList: AddressList = [];
    for (let i = 0; i < currentList.length; i++) {
      const { label, keyType, address } = currentList[i];
      const newItem: AddressListItem = {
        label,
        keyType,
        address,
        selected: targetAddress === address ? true : undefined,
      };

      newList.push(newItem);
    }

    await EncryptedStorage.setItem(KEY, JSON.stringify(newList));
    return true;
  } catch {
    return false;
  }
};

export const removeStorageAddressListItem = async (targetAddress: string) => {
  try {
    const currentList = await getStorageAddressList();
    if (currentList.length === 0) {
      return false;
    }

    const targetIndex = currentList.findIndex((item) => targetAddress === item.address);
    if (targetIndex === -1) {
      return false;
    }

    const newList = currentList.filter((_, index) => targetIndex !== index);

    await EncryptedStorage.setItem(KEY, JSON.stringify(newList));
    return true;
  } catch {
    return false;
  }
};

export const clearStorageAddressList = async () => {
  try {
    await EncryptedStorage.removeItem(KEY);
    return true;
  } catch {
    return false;
  }
};
