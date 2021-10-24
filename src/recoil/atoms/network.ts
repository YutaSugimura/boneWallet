import { atom } from 'recoil';
import { NETWORK_LIST } from '../../common/network';
import { CurrentNetwork } from '../../types/network';

export const networkListState = atom({
  key: 'networkListState',
  default: NETWORK_LIST,
});

export const currentNetworkState = atom({
  key: 'currentNetworkState',
  default: { type: 'basic', network: 'homestead' } as CurrentNetwork,
});

// New
export const simpleNetworkListState = atom({
  key: 'simpleNetworkListState',
  default: NETWORK_LIST,
});
