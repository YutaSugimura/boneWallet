export type SecretKeyType = 'mnemonic' | 'privatekey' | 'keystore';

export type AccountListItem = {
  label: string;
  secretkeyType: SecretKeyType;
  address: string;
};

export type AccountList = AccountListItem[];

export type Secretkey = {
  key: string;
  secretkeyType: SecretKeyType;
  secretkey: string;
};

export type KeyType = 'mnemonic' | 'privatekey' | 'keystore';

export type AddressListItem = {
  label: string;
  keyType: KeyType;
  address: string;
  selected?: boolean;
};

export type AddressList = AddressListItem[];
