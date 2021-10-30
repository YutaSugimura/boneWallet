export type BasicNetworkType = 'basic';
export type CustomNetworkType = 'custom';
export type NetworkType = BasicNetworkType | CustomNetworkType;
export type NetworkName = string;

export type BasicNetwork = {
  type: BasicNetworkType;
  networkName: NetworkName;
  network: string;
};

export type CustomNetwork = {
  type: CustomNetworkType;
  networkName: NetworkName;
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
