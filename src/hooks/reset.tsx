import { useResetRecoilState } from 'recoil';
import {
  accountListState,
  currentAccountIndexState,
  isAccountState,
} from '../recoil/atoms/account';
import { currentNetworkState, networkListState } from '../recoil/atoms/network';
import { clearStorage } from '../storage';

export const useReset = () => {
  const resetIsAccount = useResetRecoilState(isAccountState);
  const resetAccountList = useResetRecoilState(accountListState);
  const resetCurrentAccountIndex = useResetRecoilState(currentAccountIndexState);
  const resetNetworkList = useResetRecoilState(networkListState);
  const resetCurrentNetwork = useResetRecoilState(currentNetworkState);

  const allClear = async () => {
    await clearStorage();

    resetIsAccount();
    resetAccountList();
    resetCurrentAccountIndex();
    resetNetworkList();
    resetCurrentNetwork();
  };

  return {
    allClear,
  };
};
