import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { addressListState, isWalletState } from '../../../recoil/atoms/wallet';
import { getStorageAddressList } from '../../../storage/wallet/list';

export const useAddressListEffect = () => {
  const { isLoading, isWallet } = useRecoilValue(isWalletState);
  const setAddressList = useSetRecoilState(addressListState);

  useEffect(() => {
    (async () => {
      if (!isLoading && isWallet) {
        const storage = await getStorageAddressList();

        if (storage.length) {
          setAddressList(storage);
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, isWallet]);
};
