// export interface BasicNetwork {
//   type: 'basic';
//   network: string;
// }

export interface CustomNetwork {
  type: 'custom';
  label: string;
  url: string;
}

export type CurrentNetwork = BasicNetwork | CustomNetwork;

export type CustomNetworkList = CustomNetwork[];

export type NetworkList = (BasicNetwork | CustomNetwork)[];

type NetworkName = 'homestead' | 'ropsten' | 'rinkeby' | 'gorli' | 'kovan';

export interface BasicNetwork {
  type: 'basic';
  network: NetworkName;
}

export interface CustomNetwork {
  type: 'custom';
  networkName: string;
  rpcUrl: string;
  chainId: string;
  symbol: string;
  explorerURL: string;
}
