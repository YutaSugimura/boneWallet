import { useResetRecoilState } from 'recoil';
import { isWalletState, addressListState } from '../recoil/atoms/wallet';
import { currentNetworkState, customNetworkListState } from '../recoil/atoms/network';
import { clearStorage, clearEncryptedStorage } from '../storage';

export const useReset = () => {
  // network
  const resetCustomNetworkList = useResetRecoilState(customNetworkListState);
  const resetCurrentNetwork = useResetRecoilState(currentNetworkState);

  // wallet
  const resetIsWallet = useResetRecoilState(isWalletState);
  const resetAddressListState = useResetRecoilState(addressListState);

  const allClear = async () => {
    await Promise.all([clearStorage(), clearEncryptedStorage()]);

    resetIsWallet();
    resetAddressListState();
    resetCustomNetworkList();
    resetCurrentNetwork();
  };

  return {
    allClear,
  };
};
