import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { DEVICE_WIDTH } from '../../common';
import { InputAddress } from '../../components/input/address';
import { InputAmount } from '../../components/input/amount';
import { Button } from '../../components/button';
import { useTransfer } from '../../hooks/transfer';

type Props = {};

const Screen: React.VFC<Props> = () => {
  const { address, changeAddressValue } = require('../../hooks/transfer/address').useAddress();
  const { amount, changeAmountValue } = require('../../hooks/transfer/amount').useAmount();

  const { transfer } = useTransfer();

  return (
    <SafeAreaView>
      <Text>Transfer</Text>

      <Text>From: {''}</Text>
      <Text>Balance: {''}</Text>

      <Text />
      <Text>To:</Text>
      <InputAddress value={address} onChangeText={changeAddressValue} />

      <Text>Amount: </Text>
      <InputAmount value={amount} onChangeText={changeAmountValue} />

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
