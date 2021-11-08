import React from 'react';
import { RouteProp, NavigatorScreenParams } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { useRecoilValue } from 'recoil';
import { isWalletState } from '../recoil/atoms/wallet';
import { infuraKeyState } from '../recoil/atoms/network';
import { useInfuraKeyEffect } from '../hooks/wallet/infuraKeyEffect';
import { useIsWalletEffect } from '../hooks/wallet/isWalletEffect';
import { useAddressListEffect } from '../hooks/wallet/list/setupEffect';
import { useSetupNetworkEffect } from '../hooks/network/setupNetworkEffect';
import LoadingScreen from '../screens/loading';
import InfuraKeyScreen from '../screens/setup/infuraKey';
import SetupStack, { SetupStackParamList } from './setup';
import TabStack, { TabStackParamList } from './tab';

type AppStackParamList = {
  InfuraKey: undefined;
  Setup: NavigatorScreenParams<SetupStackParamList>;
  App: NavigatorScreenParams<TabStackParamList>;
};

export type AppScreens = keyof AppStackParamList;

export type AppNavigationProp<T extends AppScreens> = NativeStackNavigationProp<
  AppStackParamList,
  T
>;

export type AppRouteProp<T extends AppScreens> = RouteProp<AppStackParamList, T>;

const AppStack = createNativeStackNavigator<AppStackParamList>();

const Navigation: React.VFC = () => {
  const { isLoading, isWallet } = useRecoilValue(isWalletState);
  const infuraValues = useRecoilValue(infuraKeyState);

  useInfuraKeyEffect();
  useIsWalletEffect();
  useAddressListEffect();
  useSetupNetworkEffect();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      {infuraValues.isLoading ? (
        <AppStack.Screen name="InfuraKey" component={InfuraKeyScreen} />
      ) : isWallet ? (
        <AppStack.Screen name="App" component={TabStack} />
      ) : (
        <AppStack.Screen name="Setup" component={SetupStack} />
      )}
    </AppStack.Navigator>
  );
};

export default Navigation;
