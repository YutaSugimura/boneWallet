/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  ActivityIndicator,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const { isLoading, toggle } = require('./hooks/loading').useIsLoading();
  const { mnemonic, getMnemonic } = require('./hooks/mnemonic').useMnemonic();
  const { address, privateKey, getAccount } = require('./hooks/account').useAccount();

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

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {isLoading && <ActivityIndicator size="large" />}

        <Text>Mnemonic: {mnemonic}</Text>
        <Text>Address: {address}</Text>
        <Text>PrivateKey: {privateKey}</Text>

        <Button title="getMnemonic" disabled={isLoading ? true : false} onPress={wrapGetMnemonic} />
        <Button
          title="getAccount"
          disabled={isLoading ? true : mnemonic === '' ? true : false}
          onPress={wrapGetAccount}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
