import React from 'react';
import {
  ActivityIndicator,
  Button as DefaultButton,
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

type Props = {};

const Screen: React.VFC<Props> = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation: RootNavigationProp<'Top'> = require('@react-navigation/native').useNavigation();
  const { isLoading, toggle } = require('../hooks/loading').useIsLoading();
  const { mnemonic, getMnemonic } = require('../hooks/mnemonic').useMnemonic();
  const { address, privateKey, getAccount } = require('../hooks/account').useAccount();
  const { balance, getBalance } = require('../hooks/balance').useBalance();

  const wrapGetMnemonic = async () => {
    toggle(true);

    setTimeout(() => {
      getMnemonic();
      toggle(false);
    }, 300);
  };

  const wrapGetAccount = async () => {
    if (mnemonic === '') return;

    toggle(true);
    setTimeout(() => {
      getAccount(mnemonic);
      toggle(false);
    }, 300);
  };

  const getCurrentBalance = () => {
    getBalance(address);
  };

  const createWallet = () => {
    navigation.navigate('CreateWallet');
  };

  const importPrivateKey = () => {
    navigation.navigate('ImportPrivateKey');
  };

  const importMnemonic = () => {
    navigation.navigate('ImportMnemonic');
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

        <Text>Mnemonic: {mnemonic}</Text>
        <Text>Address: {address}</Text>
        <Text>PrivateKey: {privateKey}</Text>

        <Text>Balance: {balance}</Text>

        <DefaultButton title="getMnemonic" disabled={isLoading} onPress={wrapGetMnemonic} />
        <DefaultButton
          title="getAccount"
          disabled={isLoading ?? mnemonic === ''}
          onPress={wrapGetAccount}
        />

        <DefaultButton
          title="getBalance"
          disabled={isLoading ?? address === ''}
          onPress={getCurrentBalance}
        />

        <View style={styles.container}>
          <Button label="Create Wallet" onPress={createWallet} height={48} />
          <Button label="importPrivateKey" onPress={importPrivateKey} height={48} />
          <Button label="importMnemonic" onPress={importMnemonic} height={48} />
          <Button label="Setting Network" onPress={networkScreen} height={48} />
          <Button label="Transfer" onPress={transferScreen} height={48} />
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
});
