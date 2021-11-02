import React from 'react';
import { RouteProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import AccountScreen from '../screens/wallet';
import AccountListScreen from '../screens/wallet/list';
import NetworkScreen from '../screens/network';
import ImportPrivateKeyScreen from '../screens/wallet/privateKey/import';
import ExportMnemonicScreen from '../screens/wallet/mnemonic/export';

export type WalletStackParamList = {
  AccountTop: undefined;
  AccountList: undefined;
  Network: undefined;
  ImportPrivateKey: undefined;
  ExportMnemonicScreen: undefined;
};

export type WalletScreens = keyof WalletStackParamList;

export type WalletNavigationProp<T extends WalletScreens> = NativeStackNavigationProp<
  WalletStackParamList,
  T
>;

export type WalletRouteProp<T extends WalletScreens> = RouteProp<WalletStackParamList, T>;

const WalletStack = createNativeStackNavigator<WalletStackParamList>();

const Navigation: React.VFC = () => {
  return (
    <WalletStack.Navigator initialRouteName="AccountTop">
      <WalletStack.Screen
        name="AccountTop"
        component={AccountScreen}
        options={{ headerShown: false }}
      />
      <WalletStack.Screen name="AccountList" component={AccountListScreen} />
      <WalletStack.Screen name="Network" component={NetworkScreen} />

      <WalletStack.Group>
        <WalletStack.Screen name="ImportPrivateKey" component={ImportPrivateKeyScreen} />
      </WalletStack.Group>

      <WalletStack.Group>
        <WalletStack.Screen name="ExportMnemonicScreen" component={ExportMnemonicScreen} />
      </WalletStack.Group>
    </WalletStack.Navigator>
  );
};

export default Navigation;
