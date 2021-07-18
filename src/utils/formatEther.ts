import type Ethers from 'ethers';

export const formatEther = (wei: string) => {
  const ethers: typeof Ethers = require('ethers');

  return ethers.utils.formatEther(wei);
};
