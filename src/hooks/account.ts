import { useState } from 'react';

export const useAccount = () => {
  const [address, setAddress] = useState<string>('');
  const [privateKey, setPrivateKey] = useState<string>('');

  const getAccount = async (mnemonic: string) => {
    const utils = require('ethers').utils;
    const hdnode = utils.HDNode.fromMnemonic(mnemonic);
    const account1 = hdnode.derivePath("m/44'/60'/0'/0");
    setAddress(account1.address);
    setPrivateKey(account1.privateKey);
  };

  return {
    address,
    privateKey,
    getAccount,
  };
};
