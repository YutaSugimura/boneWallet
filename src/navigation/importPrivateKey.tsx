import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { useForm, FormProvider } from 'react-hook-form';
import type { PrivateKeyFormData } from '../types/form';
import PrivateKeyFormContext from '../context/privateKeyForm';
import ImportPrivateKeyScreen from '../screens/importPrivateKey';
import ConfirmPrivateKeyScreen from '../screens/importPrivateKey/confirmPrivateKey';

type ImportPrivateKeyParamList = {
  ImportPrivateKey: undefined;
  ConfirmPrivateKey: undefined;
};

type ImportPrivateKeyScreens = keyof ImportPrivateKeyParamList;

export type ImportPrivateKeyNavigationProp<T extends ImportPrivateKeyScreens> = StackNavigationProp<
  ImportPrivateKeyParamList,
  T
>;
export type ImportPrivateKeyRouteProp<T extends ImportPrivateKeyScreens> = RouteProp<
  ImportPrivateKeyParamList,
  T
>;

const ImportPrivateKeyStack = createStackNavigator<ImportPrivateKeyParamList>();

const Navigation: React.VFC = () => {
  const methods = useForm<PrivateKeyFormData>();

  return (
    <FormProvider {...methods}>
      <PrivateKeyFormContext>
        <ImportPrivateKeyStack.Navigator initialRouteName="ImportPrivateKey" mode="modal">
          <ImportPrivateKeyStack.Screen
            name="ImportPrivateKey"
            component={ImportPrivateKeyScreen}
          />
          <ImportPrivateKeyStack.Screen
            name="ConfirmPrivateKey"
            component={ConfirmPrivateKeyScreen}
          />
        </ImportPrivateKeyStack.Navigator>
      </PrivateKeyFormContext>
    </FormProvider>
  );
};

export default Navigation;
