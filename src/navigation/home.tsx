import React from 'react';
import { RouteProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import TopScreen from '../screens/index';
import NetworkScreen from '../screens/network';

type HomeStackParamList = {
  Top: undefined;
  Network: undefined;
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

      <HomeStack.Screen name="Network" component={NetworkScreen} />
    </HomeStack.Navigator>
  );
};

export default Navigation;
