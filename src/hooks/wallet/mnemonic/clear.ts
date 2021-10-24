import { removeStorageMnemonic } from '../../../storage/wallet/mnemonic';

export const useClearMnemonic = () => {
  const removeMnemonic = async () => {
    return await removeStorageMnemonic();
  };

  return {
    removeMnemonic,
  };
};
