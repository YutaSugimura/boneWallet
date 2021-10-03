import React from 'react';
import { RouteProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import AccountScreen from '../screens/account';
import AccountListScreen from '../screens/account/list';
import ImportPrivateKeyScreen from '../screens/account/privateKey/import';
import ConfirmImportPrivateKeyScreen from '../screens/account/privateKey/confirmImportPrivateKey';
import ExportPrivateKeyScreen from '../screens/account/export/privateKey';

type AccountStackParamList = {
  AccountTop: undefined;
  AccountList: undefined;
  ImportPrivateKey: undefined;
  ConfirmImportPrivateKey: undefined;
  ExportPrivateKey: undefined;
};

export type AccountScreens = keyof AccountStackParamList;

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
      <AccountStack.Screen name="AccountList" component={AccountListScreen} />

      <AccountStack.Group>
        <AccountStack.Screen name="ImportPrivateKey" component={ImportPrivateKeyScreen} />
        <AccountStack.Screen
          name="ConfirmImportPrivateKey"
          component={ConfirmImportPrivateKeyScreen}
        />
      </AccountStack.Group>

      <AccountStack.Group>
        <AccountStack.Screen name="ExportPrivateKey" component={ExportPrivateKeyScreen} />
      </AccountStack.Group>
    </AccountStack.Navigator>
  );
};

export default Navigation;
