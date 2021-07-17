import React from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Button } from '../components/button';
import { RootNavigationProp } from '../navigation';

import type { Wallet } from '../types/wallet';
import { formatEther } from '../utils/formatEther';

type Props = {};

const Screen: React.VFC<Props> = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation: RootNavigationProp<'Top'> = require('@react-navigation/native').useNavigation();
  const { isLoading } = require('../hooks/loading').useIsLoading();

  require('../hooks/wallet/switching').useSwitchingEffect();
  const { wallet }: { wallet: Wallet } = require('../context/wallet').useWalletState();
  const { balance }: { balance: string } = require('../hooks/wallet/balance').useBalance();

  const createWallet = () => {
    navigation.navigate('CreateWallet');
  };

  const importMnemonic = () => {
    navigation.navigate('ImportMnemonic');
  };

  const importPrivateKey = () => {
    navigation.navigate('ImportPrivateKey');
  };

  const networkScreen = () => {
    navigation.navigate('Network');
  };

  const transferScreen = () => {
    navigation.navigate('Transfer');
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {isLoading && <ActivityIndicator size="large" />}

        <Text>Address: {wallet !== null ? wallet.address : ''}</Text>
        <Text>PrivateKey: {wallet !== null ? wallet.privateKey : ''}</Text>
        <Text>Balance: {balance !== '' ? formatEther(balance) : ''}</Text>

        <View style={styles.container}>
          <View style={styles.section}>
            <Text>Account</Text>
            <Button label="Create Wallet" onPress={createWallet} height={48} />
            <Button label="importMnemonic" onPress={importMnemonic} height={48} />
            <Button label="importPrivateKey" onPress={importPrivateKey} height={48} />
          </View>

          <View style={styles.section}>
            <Text>Network</Text>
            <Button label="Setting Network" onPress={networkScreen} height={48} />
          </View>

          <View style={styles.section}>
            <Text>Transaction</Text>
            <Button label="Transfer" onPress={transferScreen} height={48} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  section: {
    paddingTop: 20,
  },
});
