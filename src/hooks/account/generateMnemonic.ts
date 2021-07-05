import { useState } from 'react';
import { createWallet } from '../../utils/createWallet';

export const useGenerateMnemonic = () => {
  const [mnemonic, setMnemonic] = useState<string>('');

  const getMnemonic = async () => {
    const wallet = createWallet();
    setMnemonic(wallet.mnemonic.phrase);
  };

  return {
    mnemonic,
    getMnemonic,
  };
};
