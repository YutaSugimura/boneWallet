import type Ethers from 'ethers';
import { BigNumber } from 'ethers';

const ethers: typeof Ethers = require('ethers');

export const formatEther = (wei: string) => {
  return ethers.utils.formatEther(wei);
};

export const formatUnits = (gasPrice: BigNumber) => {
  return ethers.utils.formatUnits(gasPrice, 'gwei');
};
