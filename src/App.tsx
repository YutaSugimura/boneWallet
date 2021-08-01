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
import { RecoilRoot } from 'recoil';
import NavigationRoot from './navigation';

const App: React.VFC = () => {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <NavigationRoot />
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;
