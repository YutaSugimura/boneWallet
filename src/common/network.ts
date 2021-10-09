import type { NetworkList } from '../types/network';

export const DEFAULT_NETWORK_LIST = ['homestead', 'ropsten', 'rinkeby', 'kovan', 'gorli'];

export const NETWORK_LIST: NetworkList = [
  {
    type: 'basic',
    network: 'homestead',
  },
  {
    type: 'basic',
    network: 'ropsten',
  },
  {
    type: 'basic',
    network: 'rinkeby',
  },
  {
    type: 'basic',
    network: 'kovan',
  },
  {
    type: 'basic',
    network: 'gorli',
  },
];

export const EXPLORER_LIST = [
  {
    network: 'main',
    chainId: 1,
    explorerUri: 'https://etherscan.io/',
  },
  {
    network: 'ropsten',
    chainId: 3,
    explorerUri: 'https://ropsten.etherscan.io/',
  },
  {
    network: 'rinkeby',
    chainId: 4,
    explorerUri: 'https://rinkeby.etherscan.io/',
  },
  {
    network: 'kovan',
    chainId: 42,
    explorerUri: 'https://kovan.etherscan.io/',
  },
  {
    network: 'goerli',
    chainId: 5,
    explorerUri: 'https://goerli.etherscan.io/',
  },
  {
    network: 'optimistic Ethereum',
    chainId: 10,
    explorerUri: 'https://optimistic.etherscan.io/',
  },
  {
    network: 'optimistic Ethereum Testnet',
    chainId: 69,
    explorerUri: 'https://kovan-optimistic.etherscan.io/',
  },
  {
    network: 'Arbitrum One',
    chainId: 42161,
    explorerUri: 'https://explorer.arbitrum.io/',
  },
  {
    network: 'Arbitrum Testnet',
    chainId: 421611,
    explorerUri: 'https://arbiscan.io/',
  },
];
