/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationRoot from './navigation';
import NetworkContext from './context/network/url';
import ProviderContext from './context/provider';
import AccountListContext from './context/account';
import SelectedAccountContext from './context/account/selectedAccount';

const App: React.VFC = () => {
  return (
    <NetworkContext>
      <ProviderContext>
        <AccountListContext>
          <SelectedAccountContext>
            <NavigationContainer>
              <NavigationRoot />
            </NavigationContainer>
          </SelectedAccountContext>
        </AccountListContext>
      </ProviderContext>
    </NetworkContext>
  );
};

export default App;
