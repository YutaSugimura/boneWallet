import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { useForm, FormProvider } from 'react-hook-form';
import type { MnemonicFormData } from '../types/form';
import ImportMnemonicScreen from '../screens/importMnemonic';
import ConfirmMnemonicScreen from '../screens/importMnemonic/confirm';

type ImportMnemonicParamList = {
  ImportMnemonic: undefined;
  ConfirmMnemonic: undefined;
};

type ImportMnemonicScreens = keyof ImportMnemonicParamList;

export type ImportMnemonicNavigationProp<T extends ImportMnemonicScreens> = StackNavigationProp<
  ImportMnemonicParamList,
  T
>;
export type ImportPrivateKeyRouteProp<T extends ImportMnemonicScreens> = RouteProp<
  ImportMnemonicParamList,
  T
>;

const ImportMnemonicStack = createStackNavigator<ImportMnemonicParamList>();

const Navigation: React.VFC = () => {
  const methods = useForm<MnemonicFormData>();

  return (
    <FormProvider {...methods}>
      <ImportMnemonicStack.Navigator initialRouteName="ImportMnemonic" mode="modal">
        <ImportMnemonicStack.Screen name="ImportMnemonic" component={ImportMnemonicScreen} />
        <ImportMnemonicStack.Screen name="ConfirmMnemonic" component={ConfirmMnemonicScreen} />
      </ImportMnemonicStack.Navigator>
    </FormProvider>
  );
};

export default Navigation;
