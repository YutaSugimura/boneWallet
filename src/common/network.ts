export const MAIN_NETWORK_LIST = [
  {
    type: 'basic',
    networkName: 'mainnet',
    network: 'mainnet',
  },
  {
    type: 'basic',
    networkName: 'polygon',
    network: 'polygon-mainnet',
  },
  {
    type: 'basic',
    networkName: 'arbitrum',
    network: 'arbitrum-mainnet',
  },
  {
    type: 'basic',
    networkName: 'optimism',
    network: 'optimism-mainnet',
  },
] as const;

export const TEST_NETWORK_LIST = [
  {
    type: 'basic',
    networkName: 'ropsten',
    network: 'ropsten',
  },
  {
    type: 'basic',
    networkName: 'kovan',
    network: 'kovan',
  },
  {
    type: 'basic',
    networkName: 'rinkeby',
    network: 'rinkeby',
  },
  {
    type: 'basic',
    networkName: 'goerli',
    network: 'goerli',
  },
  {
    type: 'basic',
    networkName: 'polygon-mumbai',
    network: 'polygon-mumbai',
  },
  {
    type: 'basic',
    networkName: 'arbitrum-rinkeby',
    network: 'arbitrum-rinkeby',
  },
  {
    type: 'basic',
    networkName: 'optimism-kovan',
    network: 'optimism-kovan',
  },
] as const;

export const NETWORK_LIST = [...MAIN_NETWORK_LIST, ...TEST_NETWORK_LIST];

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
