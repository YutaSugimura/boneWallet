import React from 'react';
import { RouteProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import SetupTopScreen from '../screens/setup';
import CreateWalletScreen from '../screens/setup/createWallet';
import ImportWalletScreen from '../screens/setup/importWallet';
import ConfirmImportWalletScreen from '../screens/setup/confirm';

type SetupStackParamList = {
  SetupTop: undefined;
  CreateWallet: undefined;
  ImportWallet: undefined;
  ConfirmImportWallet: undefined;
};

export type SetupScreens = keyof SetupStackParamList;

export type SetupNavigationProp<T extends SetupScreens> = NativeStackNavigationProp<
  SetupStackParamList,
  T
>;

export type SetupRouteProp<T extends SetupScreens> = RouteProp<SetupStackParamList, T>;

const SetupStack = createNativeStackNavigator<SetupStackParamList>();

const Navigation: React.VFC = () => {
  return (
    <SetupStack.Navigator initialRouteName="SetupTop">
      <SetupStack.Screen
        name="SetupTop"
        component={SetupTopScreen}
        options={{ headerShown: false }}
      />
      <SetupStack.Screen name="CreateWallet" component={CreateWalletScreen} />

      <SetupStack.Group>
        <SetupStack.Screen name="ImportWallet" component={ImportWalletScreen} />
        <SetupStack.Screen name="ConfirmImportWallet" component={ConfirmImportWalletScreen} />
      </SetupStack.Group>
    </SetupStack.Navigator>
  );
};

export default Navigation;
