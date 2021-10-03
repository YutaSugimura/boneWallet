import React from 'react';
import { RouteProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import TopScreen from '../screens/index';
import CreateWalletScreen from '../screens/createWallet';
import ImportMnemonicScreen from '../screens/importMnemonic';
import ConfirmMnemonicScreen from '../screens/importMnemonic/confirm';
import NetworkScreen from '../screens/network';
import TransferScreen from '../screens/transfer';

type HomeStackParamList = {
  Top: undefined;
  CreateWallet: undefined;
  ImportMnemonic: undefined;
  ConfirmMnemonic: undefined;
  Network: undefined;
  Transfer: undefined;
};

type HomeScreens = keyof HomeStackParamList;

export type HomeNavigationProp<T extends HomeScreens> = NativeStackNavigationProp<
  HomeStackParamList,
  T
>;
export type RootRouteProp<T extends HomeScreens> = RouteProp<HomeStackParamList, T>;

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const Navigation: React.VFC = () => {
  return (
    <HomeStack.Navigator initialRouteName="Top">
      <HomeStack.Screen name="Top" component={TopScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name="CreateWallet" component={CreateWalletScreen} />

      <HomeStack.Group>
        <HomeStack.Screen name="ImportMnemonic" component={ImportMnemonicScreen} />
        <HomeStack.Screen name="ConfirmMnemonic" component={ConfirmMnemonicScreen} />
      </HomeStack.Group>

      <HomeStack.Screen name="Network" component={NetworkScreen} />
      <HomeStack.Screen name="Transfer" component={TransferScreen} />
    </HomeStack.Navigator>
  );
};

export default Navigation;
