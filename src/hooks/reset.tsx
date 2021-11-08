import { useResetRecoilState } from 'recoil';
import { isWalletState, addressListState } from '../recoil/atoms/wallet';
import {
  currentNetworkState,
  customNetworkListState,
  infuraKeyState,
} from '../recoil/atoms/network';
import { clearStorage, clearEncryptedStorage } from '../storage';

export const useReset = () => {
  // network
  const resetCustomNetworkList = useResetRecoilState(customNetworkListState);
  const resetCurrentNetwork = useResetRecoilState(currentNetworkState);
  const resetInfuraKey = useResetRecoilState(infuraKeyState);

  // wallet
  const resetIsWallet = useResetRecoilState(isWalletState);
  const resetAddressListState = useResetRecoilState(addressListState);

  const allClear = async () => {
    await Promise.all([clearStorage(), clearEncryptedStorage()]);

    resetInfuraKey();
    resetIsWallet();
    resetAddressListState();
    resetCustomNetworkList();
    resetCurrentNetwork();
  };

  return {
    allClear,
  };
};
