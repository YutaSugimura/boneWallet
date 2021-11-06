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
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Setup</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          label="Create Wallet"
          onPress={jump('CreateWallet')}
          backgroundColor="#4facfe"
          borderWidth={0}
          borderRadius={40}
          fontColor="#FFF"
          fontSize={18}
          fontWeight="bold"
        />
        <Button
          label="Import Wallet"
          onPress={jump('ImportWallet')}
          backgroundColor="#4facfe"
          borderWidth={0}
          borderRadius={40}
          fontColor="#FFF"
          fontSize={18}
          fontWeight="bold"
          marginTop={20}
        />
      </View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
