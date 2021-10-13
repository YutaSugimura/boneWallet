import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './home';
import TransferStack from './transfer';
import AccountStack from './account';

type TabStackParamList = {
  Home: undefined;
  Transfer: undefined;
  Account: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabStack: React.VFC = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Transfer" component={TransferStack} />
      <Tab.Screen name="Account" component={AccountStack} />
    </Tab.Navigator>
  );
};

export default TabStack;
