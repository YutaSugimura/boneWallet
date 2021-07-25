import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import TransferFormContext, {
  useTransferFormDispatch,
  useTransferFormState,
} from '../../context/transfer';
import { useTransfer } from '../../hooks/transfer';
import { DEVICE_WIDTH } from '../../common';
import { InputAddress } from '../../components/input/address';
import { InputAmount } from '../../components/input/amount';
import { Button } from '../../components/button';
import { useCheckBalance } from '../../hooks/transfer/checkBalance';
import { useBalance } from '../../hooks/wallet/balance';
import { formatEther } from '../../utils/formatEther';

import { useRecoilValue } from 'recoil';
import { walletState } from '../../recoil/atoms/wallet';

type Props = {};

const Screen: React.VFC<Props> = () => {
  const wallet = useRecoilValue(walletState);
  const { transfer } = useTransfer();
  const { balance } = useBalance();
  const checkBalance = useCheckBalance();
  const { to, amount } = useTransferFormState();
  const { changeToAddress, changeSendAmount } = useTransferFormDispatch();

  return (
    <SafeAreaView>
      <Text>Transfer</Text>

      <Text>From: {wallet?.address}</Text>
      <Text>Balance: {balance !== '' ? formatEther(balance) : ''}</Text>

      <Text />
      <Text>To:</Text>
      <InputAddress value={to} onChangeText={changeToAddress} />

      <Text>Amount: </Text>
      <InputAmount value={amount} onChangeText={changeSendAmount} />
      <Text>{checkBalance ? 'ok' : 'no'}</Text>

      <View style={styles.buttonContainer}>
        <Button label="Transfer" onPress={transfer} width={DEVICE_WIDTH * 0.6} height={48} />
      </View>
    </SafeAreaView>
  );
};

const Wrap: React.VFC<Props> = (props) => {
  return (
    <TransferFormContext>
      <Screen {...props} />
    </TransferFormContext>
  );
};

export default Wrap;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
});
