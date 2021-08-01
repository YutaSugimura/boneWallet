import { atom } from 'recoil';
import type { Provider } from '../../types/ether';

export const providerState = atom({
  key: 'providerState',
  default: null as Provider,
});
