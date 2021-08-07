import type Ethers from 'ethers';
import { useRecoilValue } from 'recoil';
import { walletState } from '../../recoil/atoms/wallet';
import { parseEther } from '../../utils/parseEther';

export const useTransfer = () => {
  const wallet = useRecoilValue(walletState);

  const transfer = async () => {
    if (wallet === null) {
      return;
    }

    let tx: Ethers.ethers.utils.Deferrable<Ethers.ethers.providers.TransactionRequest> = {
      to: '0xadde20ebfe13498c9913144143d57c58e2c73d7bb01719cfaaea2a2e5f14fe53',
      value: parseEther('1'),
    };

    const txRecipt = await wallet.sendTransaction(tx);
    console.log(txRecipt);
  };

  return {
    transfer,
  };
};

// EIP1559
/**
 * EIP1559
 * twitter
 * https://mobile.twitter.com/JHancock/status/1408282853222146049
 *
 * issue
 * https://github.com/ethers-io/ethers.js/issues/1610
 *
 * hacked
 * https://hackmd.io/@q8X_WM2nTfu6nuvAzqXiTQ/1559-wallets
 */
