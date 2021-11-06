import type Ethers from 'ethers';
import { ethers } from 'ethers';
import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { selectedAddressState } from '../../recoil/selector/selectedAddress';
import { feeState } from '../../recoil/atoms/fee';
import { transactionModalStatus, transactionStatus } from '../../recoil/atoms/transaction';
import { useProvider } from '../wallet/provider';
import { useBalance } from '../wallet/balance';
import { getWallet } from '../../libs/wallet';
import { getStoragePrivateKey } from '../../storage/wallet/privatekey';
import { useEffect } from 'react';

type TransferFormData = {
  toAddress: string;
  amount: string;
  maxFee: string;
  maxPriorityFee: string;
};

export const useTransfer = () => {
  const selectedAddress = useRecoilValue(selectedAddressState);
  const feeValues = useRecoilValue(feeState);
  const setTransactionStatus = useSetRecoilState(transactionStatus);
  const setTransactionModal = useSetRecoilState(transactionModalStatus);

  const { getProvider } = useProvider();
  const balance = useBalance();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TransferFormData>();

  useEffect(() => {
    reset({ maxFee: String(feeValues.maxFee), maxPriorityFee: String(feeValues.priorityFee) });
  }, [feeValues.baseFee, feeValues.maxFee, feeValues.priorityFee, reset]);

  const onSubmit = async (data: TransferFormData) => {
    const { toAddress, amount, maxFee, maxPriorityFee } = data;

    if (!balance) {
      return;
    }

    const provider = getProvider();
    if (provider === null || selectedAddress === null) {
      return;
    }

    const privateKey = await getStoragePrivateKey(selectedAddress.address);
    if (!privateKey) {
      return;
    }

    const wallet = getWallet(provider, privateKey.secretkey);

    let tx: Ethers.ethers.utils.Deferrable<Ethers.ethers.providers.TransactionRequest> = {
      to: ethers.utils.getAddress(toAddress),
      value: ethers.utils.parseEther(amount),
      gasLimit: 21000,
      maxFeePerGas: ethers.utils.parseUnits(maxFee, 'gwei'),
      maxPriorityFeePerGas: ethers.utils.parseUnits(maxPriorityFee, 'gwei'),
    };

    const txRecipt = await wallet.sendTransaction(tx);
    reset();
    setTransactionStatus({ txHash: txRecipt.hash, status: 'pending' });
    setTransactionModal(true);
  };

  return {
    control,
    handleSubmit,
    onSubmit,
    errors,
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
