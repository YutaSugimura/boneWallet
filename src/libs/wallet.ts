import { ethers } from 'ethers';

export const createWallet = async () => {
  // const randomBytes = await crypto.randomBytes(16);
  // const mnemonic = ethers.utils.entropyToMnemonic(randomBytes);
  // return ethers.Wallet.fromMnemonic(mnemonic);

  return ethers.Wallet.createRandom();
};

export const createHDWalletFromMnemonic = (mnemonic: string): Result => {
  try {
    const hdnode = ethers.utils.HDNode.fromMnemonic(mnemonic);
    const account1 = hdnode.derivePath("m/44'/60'/0'/0");

    return { address: account1.address };
  } catch {
    return { errors: 'Mnemonic format is different' };
  }
};

export const privatekeyToAddress = (privatekey: string): Result => {
  try {
    const wallet = new ethers.Wallet(privatekey);
    return { address: wallet.address };
  } catch {
    return { errors: 'Failed to generate' };
  }
};

type Result = ResultOk | ResultError;

interface ResultOk {
  address: string;
}

interface ResultError {
  errors: string;
}
