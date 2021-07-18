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
import ProviderContext from './context/provider';
import AccountListContext from './context/account';
import WalletContext from './context/wallet';

const App: React.VFC = () => {
  return (
    <ProviderContext>
      <AccountListContext>
        <WalletContext>
          {/** Navigation */}
          <NavigationContainer>
            <NavigationRoot />
          </NavigationContainer>
          {/** /Navigation */}
        </WalletContext>
      </AccountListContext>
    </ProviderContext>
  );
};

export default App;
