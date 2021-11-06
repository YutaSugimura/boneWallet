import { ethers } from 'ethers';
import type Ethers from 'ethers';
import type { BasicNetworkLabel } from '../types/network';

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

    return { address: account1.address, privatekey: account1.privateKey };
  } catch {
    return { errors: 'Mnemonic format is different' };
  }
};

export const privatekeyToAddress = (privatekey: string): Result => {
  try {
    const wallet = new ethers.Wallet(privatekey);
    return { address: wallet.address, privatekey };
  } catch {
    return { errors: 'Failed to generate' };
  }
};

type Result = ResultOk | ResultError;

interface ResultOk {
  address: string;
  privatekey: string;
}

interface ResultError {
  errors: string;
}

export const getInfuraProvider = (
  network: BasicNetworkLabel,
  infura: { projectId: string; projectSecret: string },
) => new ethers.providers.InfuraProvider(network, infura);

export const getJsonRpcProvider = (url: string) => new ethers.providers.JsonRpcProvider(url);

export const getWallet = (
  provider: Ethers.ethers.providers.JsonRpcProvider,
  privateKey: string,
) => {
  return new ethers.Wallet(privateKey, provider);
};
