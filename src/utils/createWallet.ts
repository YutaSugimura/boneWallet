import type Ethers from 'ethers';

export const createWalletFromPrivateKey = (
  privateKey: string,
  provider: Ethers.ethers.providers.BaseProvider | Ethers.ethers.providers.JsonRpcProvider,
) => {
  const ethers: typeof Ethers = require('ethers');

  return new ethers.Wallet(privateKey, provider);
};

export const createWallet = () => {
  const ethers: typeof Ethers = require('ethers');

  return ethers.Wallet.createRandom();
};
