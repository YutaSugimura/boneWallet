import type Ethers from 'ethers';

export const createWalletFromPrivateKey = (
  privateKey: string,
  provider: Ethers.ethers.providers.BaseProvider | Ethers.ethers.providers.JsonRpcProvider,
) => {
  const ethers: typeof Ethers = require('ethers');

  return new ethers.Wallet(privateKey, provider);
};

export const createWallet = async () => {
  const ethers: typeof Ethers = require('ethers');

  // const randomBytes = await crypto.randomBytes(16);
  // const mnemonic = ethers.utils.entropyToMnemonic(randomBytes);
  // return ethers.Wallet.fromMnemonic(mnemonic);

  // is slowly
  return ethers.Wallet.createRandom();
};

export const createHDWalletFromMnemonic = (mnemonic: string) => {
  const ethers: typeof Ethers = require('ethers');

  const result: Result = {};

  try {
    const hdnode = ethers.utils.HDNode.fromMnemonic(mnemonic);
    const account1 = hdnode.derivePath("m/44'/60'/0'/0");

    result.address = account1.address;
  } catch {
    result.errors = 'PrivateKey is incorrect.';
  }

  return result;
};

export const privatekeyToAddress = (privatekey: string) => {
  const ethers: typeof Ethers = require('ethers');

  const result: Result = {};

  try {
    const wallet = new ethers.Wallet(privatekey);
    result.address = wallet.address;
  } catch {
    result.errors = 'Failed to generate';
  }

  return result;
};

type Result = {
  address?: string;
  errors?: string;
};
