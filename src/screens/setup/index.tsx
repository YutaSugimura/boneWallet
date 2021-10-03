import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import type { SetupNavigationProp, SetupScreens } from '../../navigation/setup';
import { Button } from '../../components/uiParts/button';

const Screen: React.VFC = () => {
  const navigation = useNavigation<SetupNavigationProp<'SetupTop'>>();

  const jump = (screen: SetupScreens) => () => {
    navigation.navigate(screen);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Setup</Text>
        <Button label="Create Wallet" onPress={jump('CreateWallet')} />
        <Button label="Import Wallet" onPress={jump('ImportWallet')} />
      </View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
