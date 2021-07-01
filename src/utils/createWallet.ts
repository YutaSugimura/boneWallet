import type Ethers from 'ethers';

export const createWallet = (
  privateKey: string,
  provider: Ethers.ethers.providers.JsonRpcProvider,
) => {
  const ethers: typeof Ethers = require('ethers');

  return new ethers.Wallet(privateKey, provider);
};
