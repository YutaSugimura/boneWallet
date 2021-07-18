import type Ethers from 'ethers';
import { useTransferFormState } from '../../context/transfer';
import { useWalletState } from '../../context/wallet';
import { parseEther } from '../../utils/parseEther';

export const useTransfer = () => {
  const { wallet } = useWalletState();
  const { to, amount } = useTransferFormState();

  const transfer = async () => {
    if (wallet === null) return;

    let tx: Ethers.ethers.utils.Deferrable<Ethers.ethers.providers.TransactionRequest> = {
      to,
      value: parseEther(amount),
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
