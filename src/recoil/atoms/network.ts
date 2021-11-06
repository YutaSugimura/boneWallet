import Config from 'react-native-config';
import { atom } from 'recoil';
import type { CurrentNetworkState, CustomNetworkList } from '../../types/network';

const INFURA_PROJECT_ID = Config.INFURA_PROJECT_ID;
const INFURAP_ROJECT_SECRET = Config.INFURAPROJECT_SECRET;

export const infuraKeyState = atom({
  key: 'infuraKeyState',
  default: {
    isLoading: INFURA_PROJECT_ID && INFURAP_ROJECT_SECRET ? false : true,
    projectId: INFURA_PROJECT_ID ? INFURA_PROJECT_ID : undefined,
    projectSecret: INFURAP_ROJECT_SECRET ? INFURAP_ROJECT_SECRET : undefined,
  } as
    | {
        isLoading: true;
      }
    | {
        isLoading: false;
        projectId: string;
        projectSecret: string;
      },
});

export const currentNetworkState = atom({
  key: 'currentNetworkState',
  default: { isLoading: true } as CurrentNetworkState,
});

export const customNetworkListState = atom({
  key: 'customNetworkListState',
  default: [] as CustomNetworkList,
});
