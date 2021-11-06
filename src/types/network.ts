import { NETWORK_LIST } from '../common/network';

export type BasicNetworkType = 'basic';
export type CustomNetworkType = 'custom';
export type NetworkType = BasicNetworkType | CustomNetworkType;
export type BasicNetworkLabel = typeof NETWORK_LIST[number]['network'];
export type BasicNetworkName = typeof NETWORK_LIST[number]['networkName'];
export type CustomNetworkName = string;
export type NetworkName = BasicNetworkName | CustomNetworkName;

export type BasicNetwork = {
  type: BasicNetworkType;
  networkName: BasicNetworkName;
  network: BasicNetworkLabel;
};

export type CustomNetwork = {
  type: CustomNetworkType;
  networkName: CustomNetworkName;
  rpcUrl: string;
  chainId?: string;
  symbol?: string;
  explorerURL?: string;
};

export type BasicNetworkList = BasicNetwork[];
export type CustomNetworkList = CustomNetwork[];

export type CurrentNetworkState =
  | {
      isLoading: true;
    }
  | {
      isLoading: false;
      network: BasicNetwork;
    }
  | {
      isLoading: false;
      network: CustomNetwork;
    };
