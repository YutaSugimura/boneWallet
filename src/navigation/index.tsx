import React from 'react';
import { RouteProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import TopScreen from '../screens/index';
import CreateWalletScreen from '../screens/createWallet';
import ImportPrivatekeyScreen from '../screens/importPrivatekey';
import ConfirmPrivatekeyScreen from '../screens/importPrivatekey/confirmPrivatekey';
import ImportMnemonicScreen from '../screens/importMnemonic';
import ConfirmMnemonicScreen from '../screens/importMnemonic/confirm';
import NetworkScreen from '../screens/network';
import AccountListScreen from '../screens/accountList';
import TransferScreen from '../screens/transfer';
import ExportMnemonicScreen from '../screens/export/mnemonic';
import ExportPrivatekeyScreen from '../screens/export/privatekey';

type RootStackParamList = {
  Top: undefined;
  CreateWallet: undefined;
  ImportPrivatekey: undefined;
  ConfirmPrivatekey: undefined;
  ImportMnemonic: undefined;
  ConfirmMnemonic: undefined;
  Network: undefined;
  AccountList: undefined;
  Transfer: undefined;
  ExportMnemonic: undefined;
  ExportPrivatekey: undefined;
};

type RootScreens = keyof RootStackParamList;

export type RootNavigationProp<T extends RootScreens> = NativeStackNavigationProp<
  RootStackParamList,
  T
>;
export type RootRouteProp<T extends RootScreens> = RouteProp<RootStackParamList, T>;

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Navigation: React.VFC = () => {
  return (
    <RootStack.Navigator initialRouteName="Top">
      <RootStack.Screen name="Top" component={TopScreen} />
      <RootStack.Screen name="CreateWallet" component={CreateWalletScreen} />

      <RootStack.Group>
        <RootStack.Screen name="ImportPrivatekey" component={ImportPrivatekeyScreen} />
        <RootStack.Screen name="ConfirmPrivatekey" component={ConfirmPrivatekeyScreen} />
      </RootStack.Group>

      <RootStack.Group>
        <RootStack.Screen name="ImportMnemonic" component={ImportMnemonicScreen} />
        <RootStack.Screen name="ConfirmMnemonic" component={ConfirmMnemonicScreen} />
      </RootStack.Group>

      <RootStack.Screen name="Network" component={NetworkScreen} />
      <RootStack.Screen name="AccountList" component={AccountListScreen} />
      <RootStack.Screen name="Transfer" component={TransferScreen} />
      <RootStack.Screen name="ExportMnemonic" component={ExportMnemonicScreen} />
      <RootStack.Screen name="ExportPrivatekey" component={ExportPrivatekeyScreen} />
    </RootStack.Navigator>
  );
};

export default Navigation;
