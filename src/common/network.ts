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
