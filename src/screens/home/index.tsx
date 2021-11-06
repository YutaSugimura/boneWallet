import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { SelectedAddress } from '../../components/wallet/address';
import { CurrentNetwork } from '../../components/wallet/network';
import { CurrentBalance } from '../../components/wallet/balance';

const Screen: React.VFC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Home</Text>
      </View>

      <View>
        <SelectedAddress />
        <CurrentNetwork />
        <CurrentBalance />
      </View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
