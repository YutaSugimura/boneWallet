import { ethers } from 'ethers';
import type { BasicNetwork, CustomNetwork } from '../types/network';

export const createProvider = (currentNetwork: BasicNetwork | CustomNetwork) => {
  if (currentNetwork.type === 'basic') {
    return ethers.getDefaultProvider(currentNetwork.network);
  } else if (currentNetwork.type === 'custom') {
    return new ethers.providers.JsonRpcProvider(currentNetwork.rpcUrl);
  }
};
