import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import TopScreen from '../screens/index';
import CreateWalletScreen from '../screens/createWallet';
import ImportPrivatekeyStack from './importPrivatekey';
import ImportMnemonicStack from './importMnemonic';
import NetworkScreen from '../screens/network';
import AccountListScreen from '../screens/accountList';
import TransferScreen from '../screens/transfer';
import ExportMnemonicScreen from '../screens/export/mnemonic';
import ExportPrivatekeyScreen from '../screens/export/privatekey';

type RootStackParamList = {
  Top: undefined;
  CreateWallet: undefined;
  ImportPrivatekey: undefined;
  ImportMnemonic: undefined;
  Network: undefined;
  AccountList: undefined;
  Transfer: undefined;
  ExportMnemonic: undefined;
  ExportPrivatekey: undefined;
};

type RootScreens = keyof RootStackParamList;

export type RootNavigationProp<T extends RootScreens> = StackNavigationProp<RootStackParamList, T>;
export type RootRouteProp<T extends RootScreens> = RouteProp<RootStackParamList, T>;

const RootStack = createStackNavigator<RootStackParamList>();

const Navigation: React.VFC = () => {
  return (
    <RootStack.Navigator initialRouteName="Top">
      <RootStack.Screen name="Top" component={TopScreen} />
      <RootStack.Screen name="CreateWallet" component={CreateWalletScreen} />
      <RootStack.Screen name="ImportPrivatekey" component={ImportPrivatekeyStack} />
      <RootStack.Screen name="ImportMnemonic" component={ImportMnemonicStack} />
      <RootStack.Screen name="Network" component={NetworkScreen} />
      <RootStack.Screen name="AccountList" component={AccountListScreen} />
      <RootStack.Screen name="Transfer" component={TransferScreen} />
      <RootStack.Screen name="ExportMnemonic" component={ExportMnemonicScreen} />
      <RootStack.Screen name="ExportPrivatekey" component={ExportPrivatekeyScreen} />
    </RootStack.Navigator>
  );
};

export default Navigation;
