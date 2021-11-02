import React from 'react';
import { NavigatorScreenParams } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack, { HomeStackParamList } from './home';
import TransferStack, { TransferStackParamList } from './transfer';
import AccountStack, { WalletStackParamList } from './wallet';

export type TabStackParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Transfer: NavigatorScreenParams<TransferStackParamList>;
  Wallet: NavigatorScreenParams<WalletStackParamList>;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabStack: React.VFC = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Transfer" component={TransferStack} />
      <Tab.Screen name="Wallet" component={AccountStack} />
    </Tab.Navigator>
  );
};

export default TabStack;
