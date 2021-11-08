import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { importMnemonicModalState } from '../../../recoil/atoms/ui';
import { isWalletState } from '../../../recoil/atoms/wallet';
import { createHDWalletFromMnemonic } from '../../../libs/wallet';
import { removeStorageMnemonic, setStorageMnemonic } from '../../../storage/wallet/mnemonic';
import { setStorageAddressListItem } from '../../../storage/wallet/list';

type MnemonicFormData = {
  mnemonic: string;
};

export const useImportMnemonic = () => {
  const { control, handleSubmit, reset } = useForm<MnemonicFormData>();

  const setIsModal = useSetRecoilState(importMnemonicModalState);
  const setIsWallet = useSetRecoilState(isWalletState);
  const resetModal = useResetRecoilState(importMnemonicModalState);

  const [address, setAddress] = useState<string>();
  const [mnemonic, setMnemonic] = useState<string>();
  const [message, setMessage] = useState<string>();

  const onSubmit = async (data: MnemonicFormData) => {
    const wallet = createHDWalletFromMnemonic(data.mnemonic);

    if ('errors' in wallet) {
      return setMessage(wallet.errors);
    }

    setAddress(wallet.address);
    setMnemonic(data.mnemonic);
    setIsModal(true);
  };

  const saveMnemonic = async () => {
    if (!mnemonic || !address) {
      return;
    }

    const result = await setStorageMnemonic(mnemonic);

    if (result) {
      const message = await setStorageAddressListItem({
        label: 'main',
        address,
        keyType: 'mnemonic',
      });

      if (message === 'ok') {
        resetModal();

        setTimeout(() => {
          setIsWallet({ isLoading: false, isWallet: true });
        }, 500);
        return;
      }

      await removeStorageMnemonic();
      setIsModal(false);
      setMessage(message);
      return;
    }
  };

  const clear = () => {
    reset();
    resetModal();
    setAddress(undefined);
    setMnemonic(undefined);
    setMessage(undefined);
  };

  return {
    control,
    handleSubmit,
    onSubmit,
    reset: clear,
    address,
    mnemonic,
    message,
    saveMnemonic,
  };
};
