import type Ethers from 'ethers';
import { useRecoilValue } from 'recoil';
import { currentNetworkState } from '../../recoil/atoms/network';
import { currentAccountState } from '../../recoil/selector/currentAccount';
import { amountFormState, toAddressFormState } from '../../recoil/atoms/input/transfer';
import { useBalance } from '../wallet/balance';
import { getStorageSecretkey } from '../../storage/account/secretkey';
import { parseEther } from '../../utils/parseEther';
import { createProvider } from '../../utils/provider';

const ethers: typeof Ethers = require('ethers');

export const useTransfer = () => {
  const toAddress = useRecoilValue(toAddressFormState);
  const amount = useRecoilValue(amountFormState);
  const currentNetwork = useRecoilValue(currentNetworkState);
  const currentAccount = useRecoilValue(currentAccountState);
  const balance = useBalance();

  const transfer = async () => {
    const provider = createProvider(currentNetwork);
    if (!provider) {
      return;
    }

    const privatekey = await getStorageSecretkey(currentAccount.address);
    if (!privatekey) {
      return;
    }

    const wallet = new ethers.Wallet(privatekey.secretkey, provider);

    if (Number(balance) <= Number(amount)) {
      return;
    }

    let tx: Ethers.ethers.utils.Deferrable<Ethers.ethers.providers.TransactionRequest> = {
      to: ethers.utils.getAddress(toAddress),
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
