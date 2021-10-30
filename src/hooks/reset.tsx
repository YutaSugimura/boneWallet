import { useResetRecoilState } from 'recoil';
import { isWalletState } from '../recoil/atoms/wallet';
import {
  accountListState,
  currentAccountIndexState,
  isAccountState,
} from '../recoil/atoms/account';
import { currentNetworkState, customNetworkListState } from '../recoil/atoms/network';
import { clearStorage, clearEncryptedStorage } from '../storage';

export const useReset = () => {
  const resetIsAccount = useResetRecoilState(isAccountState);
  const resetAccountList = useResetRecoilState(accountListState);
  const resetCurrentAccountIndex = useResetRecoilState(currentAccountIndexState);

  // network
  const resetCustomNetworkList = useResetRecoilState(customNetworkListState);
  const resetCurrentNetwork = useResetRecoilState(currentNetworkState);

  // wallet
  const resetIsWallet = useResetRecoilState(isWalletState);

  const allClear = async () => {
    await Promise.all([clearStorage(), clearEncryptedStorage()]);

    resetIsWallet();
    resetIsAccount();
    resetAccountList();
    resetCurrentAccountIndex();
    resetCustomNetworkList();
    resetCurrentNetwork();
  };

  return {
    allClear,
  };
};
