import React from 'react';
import { RouteProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import HomeTopScreen from '../screens/home';

export type HomeStackParamList = {
  HomeTop: undefined;
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
    <HomeStack.Navigator initialRouteName="HomeTop">
      <HomeStack.Screen name="HomeTop" component={HomeTopScreen} options={{ headerShown: false }} />
    </HomeStack.Navigator>
  );
};

export default Navigation;
