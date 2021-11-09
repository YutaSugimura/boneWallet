import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { importMnemonicModalState } from '../../../recoil/atoms/ui';
import { isWalletState } from '../../../recoil/atoms/wallet';
import { createHDWalletFromMnemonic } from '../../../libs/wallet';
import { setStorageAddressListItem } from '../../../storage/wallet/list';
import { removeStorageMnemonic, setStorageMnemonic } from '../../../storage/wallet/mnemonic';
import { setStoragePrivateKey } from '../../../storage/wallet/privatekey';

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
  const [privateKey, setPrivateKey] = useState<string>();
  const [message, setMessage] = useState<string>();

  const onSubmit = async (data: MnemonicFormData) => {
    const wallet = createHDWalletFromMnemonic(data.mnemonic);

    if ('errors' in wallet) {
      return setMessage(wallet.errors);
    }

    setAddress(wallet.address);
    setPrivateKey(wallet.privatekey);
    setMnemonic(data.mnemonic);
    setIsModal(true);
  };

  const saveMnemonic = async () => {
    if (!mnemonic || !privateKey || !address) {
      return;
    }

    const resultSetMnemonic = await setStorageMnemonic(mnemonic);
    const resultSetStoragePrivateKey = await setStoragePrivateKey(
      address,
      'privatekey',
      privateKey,
    );

    if (resultSetMnemonic && resultSetStoragePrivateKey) {
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
    setPrivateKey(undefined);
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
