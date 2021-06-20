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

const App: React.VFC = () => {
  return (
    <NetworkContext>
      <ProviderContext>
        <NavigationContainer>
          <NavigationRoot />
        </NavigationContainer>
      </ProviderContext>
    </NetworkContext>
  );
};

export default App;
