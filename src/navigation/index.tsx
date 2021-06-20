import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import TopScreen from '../screens/index';
import NetworkScreen from '../screens/network';

type RootStackParamList = {
  Top: undefined;
  Network: undefined;
};

type RootScreens = keyof RootStackParamList;

export type RootNavigationProp<T extends RootScreens> = StackNavigationProp<RootStackParamList, T>;
export type RootRouteProp<T extends RootScreens> = RouteProp<RootStackParamList, T>;

const RootStack = createStackNavigator<RootStackParamList>();

const Navigation: React.VFC = () => {
  return (
    <RootStack.Navigator initialRouteName="Top">
      <RootStack.Screen name="Top" component={TopScreen} />
      <RootStack.Screen name="Network" component={NetworkScreen} />
    </RootStack.Navigator>
  );
};

export default Navigation;
