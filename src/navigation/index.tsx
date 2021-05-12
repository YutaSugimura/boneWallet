import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TopScreen from '../screens/index';

type RootStackParamList = {
  Top: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const Navigation: React.VFC = () => {
  return (
    <RootStack.Navigator initialRouteName="Top">
      <RootStack.Screen name="Top" component={TopScreen} />
    </RootStack.Navigator>
  );
};

export default Navigation;
