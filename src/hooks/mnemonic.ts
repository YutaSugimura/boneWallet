import { useState } from 'react';

export const useMnemonic = () => {
  const [mnemonic, setMnemonic] = useState<string>('');

  const getMnemonic = async () => {
    const ethers = require('ethers');
    const wallet = ethers.Wallet.createRandom();
    const newMnemonic = wallet.mnemonic;
    setMnemonic(newMnemonic.phrase);
  };

  return {
    mnemonic,
    getMnemonic,
  };
};
