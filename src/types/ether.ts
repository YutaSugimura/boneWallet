import type Ethers from 'ethers';

export type Provider =
  | Ethers.ethers.providers.JsonRpcProvider
  | Ethers.ethers.providers.BaseProvider
  | null;
