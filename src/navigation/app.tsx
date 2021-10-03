import React from 'react';
import { RouteProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { useRecoilValue } from 'recoil';
import { isAccountState } from '../recoil/atoms/account';
import LoadingScreen from '../screens/loading';
import SetupStack from './setup';
import TabStack from './tab';
import { useSetup } from '../hooks/account/setup';

type AppStackParamList = {
  Setup: undefined;
  App: undefined;
};

export type AppScreens = keyof AppStackParamList;

export type AppNavigationProp<T extends AppScreens> = NativeStackNavigationProp<
  AppStackParamList,
  T
>;

export type AppRouteProp<T extends AppScreens> = RouteProp<AppStackParamList, T>;

const AppStack = createNativeStackNavigator<AppStackParamList>();

const Navigation: React.VFC = () => {
  const { isLoading, isAccount } = useRecoilValue(isAccountState);
  useSetup();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      {isAccount ? (
        <AppStack.Screen name="App" component={TabStack} />
      ) : (
        <AppStack.Screen name="Setup" component={SetupStack} />
      )}
    </AppStack.Navigator>
  );
};

export default Navigation;