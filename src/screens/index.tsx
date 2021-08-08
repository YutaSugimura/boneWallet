import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { CurrentAccount } from '../components/account/current';
import { MainAccount } from '../components/account/main';
import { Button } from '../components/button';
import { RootNavigationProp } from '../navigation';

type Props = {};

const Screen: React.VFC<Props> = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation: RootNavigationProp<'Top'> = require('@react-navigation/native').useNavigation();

  const createWallet = () => {
    navigation.navigate('CreateWallet');
  };

  const importMnemonic = () => {
    navigation.navigate('ImportMnemonic');
  };

  const importPrivateKey = () => {
    navigation.navigate('ImportPrivatekey');
  };

  const networkScreen = () => {
    navigation.navigate('Network');
  };

  const accountListScreen = () => {
    navigation.navigate('AccountList');
  };

  const transferScreen = () => {
    navigation.navigate('Transfer');
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <MainAccount />
        <CurrentAccount />

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
            <Text>Account</Text>
            <Button label="Account list" onPress={accountListScreen} height={48} />
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
