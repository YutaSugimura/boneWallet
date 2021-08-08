export interface BasicNetwork {
  type: 'basic';
  network: string;
}

export interface CustomNetwork {
  type: 'custom';
  label: string;
  url: string;
}

export type CurrentNetwork = BasicNetwork | CustomNetwork;

export type CustomNetworkList = CustomNetwork[];

export type NetworkList = (BasicNetwork | CustomNetwork)[];
