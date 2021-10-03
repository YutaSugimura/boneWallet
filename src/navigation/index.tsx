import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './tab';

const Navigation: React.VFC = () => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
