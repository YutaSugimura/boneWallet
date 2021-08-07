import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useRecoilValue } from 'recoil';
import { walletState } from '../../recoil/atoms/wallet';
import { balanceState } from '../../recoil/atoms/balance';
import { useTransfer } from '../../hooks/transfer';
import { DEVICE_WIDTH } from '../../common';
import { InputAddress } from '../../components/input/address';
import { InputAmount } from '../../components/input/amount';
import { Button } from '../../components/button';
import { formatEther } from '../../utils/formatEther';

type Props = {};

const Screen: React.VFC<Props> = () => {
  const wallet = useRecoilValue(walletState);
  const { transfer } = useTransfer();
  const balance = useRecoilValue(balanceState);

  return (
    <SafeAreaView>
      <Text>Transfer</Text>

      <Text>From: {wallet?.address}</Text>
      <Text>Balance: {balance !== '' ? formatEther(balance) : ''} eth</Text>

      <Text />
      <Text>To:</Text>
      <InputAddress />

      <Text>Amount: </Text>
      <InputAmount />

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
