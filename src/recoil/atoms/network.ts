import Config from 'react-native-config';
import { atom } from 'recoil';
import type { InfuraKeyState } from '../../types/infuraKey';
import type { CurrentNetworkState, CustomNetworkList } from '../../types/network';

const INFURA_PROJECT_ID = Config.INFURA_PROJECT_ID;
const INFURAP_ROJECT_SECRET = Config.INFURA_PROJECT_SECRET;

export const infuraKeyState = atom({
  key: 'infuraKeyState',
  default: {
    isLoading: INFURA_PROJECT_ID ? (INFURAP_ROJECT_SECRET ? false : true) : true,
    projectId: INFURA_PROJECT_ID,
    projectSecret: INFURAP_ROJECT_SECRET,
  } as InfuraKeyState,
});

export const currentNetworkState = atom({
  key: 'currentNetworkState',
  default: { isLoading: true } as CurrentNetworkState,
});

export const customNetworkListState = atom({
  key: 'customNetworkListState',
  default: [] as CustomNetworkList,
});
