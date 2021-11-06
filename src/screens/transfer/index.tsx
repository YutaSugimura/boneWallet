import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useGasPriceEffect } from '../../hooks/wallet/getFeeDataEffect';
import { SelectedAddress } from '../../components/wallet/address';
import { CurrentBalance } from '../../components/wallet/balance';
import { CurrentNetwork } from '../../components/wallet/network';
import { TransferForm } from '../../components/transfer';
import { TransactionStatusModal } from '../../components/transfer/transactionStatusModal';

const Screen: React.VFC = () => {
  useGasPriceEffect();

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Transfer</Text>
        </View>

        <View>
          <SelectedAddress />
          <CurrentNetwork />
          <CurrentBalance />
        </View>

        <TransferForm />
      </ScrollView>

      <TransactionStatusModal />
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
