/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { Suspense } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from 'recoil';
import NavigationRoot from './navigation';

const App: React.VFC = () => {
  return (
    <RecoilRoot>
      <Suspense fallback={<View />}>
        <NavigationContainer>
          <NavigationRoot />
        </NavigationContainer>
      </Suspense>
    </RecoilRoot>
  );
};

export default App;
