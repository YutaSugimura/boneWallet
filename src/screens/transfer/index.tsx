import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useRecoilState, useRecoilValue } from 'recoil';
import { amountFormState, toAddressFormState } from '../../recoil/atoms/input/transfer';
import { currentAccountState } from '../../recoil/selector/currentAccount';
import { useBalance } from '../../hooks/wallet/balance';
import { useTransfer } from '../../hooks/transfer';
import { DEVICE_WIDTH } from '../../common';
import { InputAddress } from '../../components/uiParts/input/address';
import { InputAmount } from '../../components/uiParts/input/amount';
import { Button } from '../../components/uiParts/button';

type Props = {};

const Screen: React.VFC<Props> = () => {
  const [toAddress, setToAddress] = useRecoilState(toAddressFormState);
  const [amount, setAmount] = useRecoilState(amountFormState);
  const { label, address } = useRecoilValue(currentAccountState);
  const balance = useBalance();
  const { transfer } = useTransfer();

  return (
    <SafeAreaView>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Transfer</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>From</Text>
        <Text>Account Label : {label}</Text>
        <Text style={styles.label}>Address</Text>
        <Text>{address}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Balance</Text>
        <Text>{balance}eth</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>To:</Text>
        <InputAddress value={toAddress} onChangeText={setToAddress} />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Amount: </Text>
        <InputAmount value={amount} onChangeText={setAmount} />
      </View>

      <View style={styles.buttonContainer}>
        <Button label="Transfer" onPress={transfer} width={DEVICE_WIDTH * 0.6} height={48} />
      </View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  section: {
    paddingTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
