import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useRecoilState, useRecoilValue } from 'recoil';
import { amountFormState, toAddressFormState } from '../../recoil/atoms/input/transfer';
import { currentAccountState } from '../../recoil/selector/currentAccount';
import { useBalance } from '../../hooks/wallet/balance';
import { useTransfer } from '../../hooks/transfer';
import { DEVICE_WIDTH } from '../../common';
import { InputAddress } from '../../components/input/address';
import { InputAmount } from '../../components/input/amount';
import { Button } from '../../components/button';

type Props = {};

const Screen: React.VFC<Props> = () => {
  const [toAddress, setToAddress] = useRecoilState(toAddressFormState);
  const [amount, setAmount] = useRecoilState(amountFormState);
  const { label, address } = useRecoilValue(currentAccountState);
  const balance = useBalance();
  const { transfer } = useTransfer();

  return (
    <SafeAreaView>
      <Text>Transfer</Text>

      <Text>From</Text>
      <Text>Label</Text>
      <Text>{label}</Text>

      <Text>Address</Text>
      <Text>{address}</Text>

      <Text>Balance: {balance}eth</Text>

      <Text />
      <Text>To:</Text>
      <InputAddress value={toAddress} onChangeText={setToAddress} />

      <Text>Amount: </Text>
      <InputAmount value={amount} onChangeText={setAmount} />

      <View style={styles.buttonContainer}>
        <Button label="Transfer" onPress={transfer} width={DEVICE_WIDTH * 0.6} height={48} />
      </View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
});
