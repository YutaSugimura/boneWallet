import React, { useCallback } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { HomeNavigationProp } from '../navigation/home';
import { useNetworkEffect } from '../hooks/network/list';
import { useAccountlistEffect, useStartupCurrentAccountIndex } from '../hooks/account/list';
import { CurrentAddress } from '../components/account/address';
import { CurrentBalance } from '../components/account/balance';
import { Button } from '../components/uiParts/button';

type Props = {};

const Screen: React.VFC<Props> = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation<HomeNavigationProp<'Top'>>();
  useStartupCurrentAccountIndex();
  useNetworkEffect();
  useAccountlistEffect();

  const createWallet = useCallback(() => {
    navigation.navigate('CreateWallet');
  }, [navigation]);

  const importMnemonic = useCallback(() => {
    navigation.navigate('ImportMnemonic');
  }, [navigation]);

  const networkScreen = useCallback(() => {
    navigation.navigate('Network');
  }, [navigation]);

  const transferScreen = useCallback(() => {
    navigation.navigate('Transfer');
  }, [navigation]);

  const exportMnemonicScreen = useCallback(() => {
    navigation.navigate('ExportMnemonic');
  }, [navigation]);

  const exportPrivatekeyScreen = useCallback(() => {
    navigation.navigate('ExportPrivatekey');
  }, [navigation]);

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <CurrentAddress />
        <CurrentBalance />

        <View style={styles.container}>
          <View style={styles.section}>
            <Text>Account</Text>
            <Button label="Create Wallet" onPress={createWallet} height={48} />
            <Button label="importMnemonic" onPress={importMnemonic} height={48} />
          </View>

          <View style={styles.section}>
            <Text>Network</Text>
            <Button label="Setting Network" onPress={networkScreen} height={48} />
          </View>

          <View style={styles.section}>
            <Text>Transaction</Text>
            <Button label="Transfer" onPress={transferScreen} height={48} />
          </View>

          <View style={styles.section}>
            <Text>Export</Text>
            <Button label="Export Mnemonic" onPress={exportMnemonicScreen} height={48} />
            <Button label="Export Privatekey" onPress={exportPrivatekeyScreen} height={48} />
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
