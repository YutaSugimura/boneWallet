import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import ImportPrivatekeyScreen from '../screens/importPrivatekey';
import ConfirmPrivatekeyScreen from '../screens/importPrivatekey/confirmPrivatekey';

type ImportPrivatekeyParamList = {
  ImportPrivatekey: undefined;
  ConfirmPrivatekey: undefined;
};

type ImportPrivatekeyScreens = keyof ImportPrivatekeyParamList;

export type ImportPrivatekeyNavigationProp<T extends ImportPrivatekeyScreens> = StackNavigationProp<
  ImportPrivatekeyParamList,
  T
>;
export type ImportPrivatekeyRouteProp<T extends ImportPrivatekeyScreens> = RouteProp<
  ImportPrivatekeyParamList,
  T
>;

const ImportPrivatekeyStack = createStackNavigator<ImportPrivatekeyParamList>();

const Navigation: React.VFC = () => {
  return (
    <ImportPrivatekeyStack.Navigator
      initialRouteName="ImportPrivatekey"
      screenOptions={{ presentation: 'modal' }}
    >
      <ImportPrivatekeyStack.Screen name="ImportPrivatekey" component={ImportPrivatekeyScreen} />
      <ImportPrivatekeyStack.Screen name="ConfirmPrivatekey" component={ConfirmPrivatekeyScreen} />
    </ImportPrivatekeyStack.Navigator>
  );
};

export default Navigation;
