import type Ethers from 'ethers';

export const parseEther = (ether: string) => {
  const ethers: typeof Ethers = require('ethers');

  return ethers.utils.parseEther(ether);
};
