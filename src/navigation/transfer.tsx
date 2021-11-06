import React from 'react';
import { RouteProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import TransferScreen from '../screens/transfer';

export type TransferStackParamList = {
  TransferTop: undefined;
};

type AccountScreens = keyof TransferStackParamList;

export type TransferNavigationProp<T extends AccountScreens> = NativeStackNavigationProp<
  TransferStackParamList,
  T
>;

export type TransferRouteProp<T extends AccountScreens> = RouteProp<TransferStackParamList, T>;

const TransferStack = createNativeStackNavigator<TransferStackParamList>();

const Navigation: React.VFC = () => {
  return (
    <TransferStack.Navigator initialRouteName="TransferTop">
      <TransferStack.Screen
        name="TransferTop"
        component={TransferScreen}
        options={{ headerShown: false }}
      />
    </TransferStack.Navigator>
  );
};

export default Navigation;
