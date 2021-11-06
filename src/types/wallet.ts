export type KeyType = 'mnemonic' | 'privatekey' | 'keystore';

export type AddressListItem = {
  label: string;
  keyType: KeyType;
  address: string;
  selected?: boolean;
};

export type AddressList = AddressListItem[];

export type Secretkey = {
  key: string;
  secretkeyType: KeyType;
  secretkey: string;
};
