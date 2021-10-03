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
import { RecoilRoot } from 'recoil';
import Navigation from './navigation';

const App: React.VFC = () => {
  return (
    <RecoilRoot>
      <Suspense fallback={<View />}>
        <Navigation />
      </Suspense>
    </RecoilRoot>
  );
};

export default App;
