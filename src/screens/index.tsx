import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, useColorScheme } from 'react-native';
import { useNetworkEffect } from '../hooks/network/list';
import { useAccountlistEffect, useStartupCurrentAccountIndex } from '../hooks/account/list';
import { CurrentAddress } from '../components/account/address';
import { CurrentBalance } from '../components/account/balance';

const Screen: React.VFC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  useStartupCurrentAccountIndex();
  useNetworkEffect();
  useAccountlistEffect();

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <CurrentAddress />
        <CurrentBalance />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Screen;
