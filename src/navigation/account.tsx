import React from 'react';
import { RouteProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import AccountScreen from '../screens/account';

type AccountStackParamList = {
  AccountTop: undefined;
};

type AccountScreens = keyof AccountStackParamList;

export type AccountNavigationProp<T extends AccountScreens> = NativeStackNavigationProp<
  AccountStackParamList,
  T
>;

export type AccountRouteProp<T extends AccountScreens> = RouteProp<AccountStackParamList, T>;

const AccountStack = createNativeStackNavigator<AccountStackParamList>();

const Navigation: React.VFC = () => {
  return (
    <AccountStack.Navigator initialRouteName="AccountTop">
      <AccountStack.Screen
        name="AccountTop"
        component={AccountScreen}
        options={{ headerShown: false }}
      />
    </AccountStack.Navigator>
  );
};

export default Navigation;
