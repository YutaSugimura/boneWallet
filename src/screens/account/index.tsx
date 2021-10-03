import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import type { AccountNavigationProp, AccountScreens } from '../../navigation/account';
import { Button } from '../../components/uiParts/button';
import { clearStorage } from '../../storage';

const Screen: React.VFC = () => {
  const navigation = useNavigation<AccountNavigationProp<'AccountTop'>>();

  const jump = (screen: AccountScreens) => () => {
    navigation.navigate(screen);
  };

  const allClear = async () => {
    await clearStorage();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button label="Import PrivateKey" onPress={jump('ImportPrivateKey')} height={48} />
        <Button label="Account List" onPress={jump('AccountList')} height={48} />
        <Button label="Network" onPress={jump('Network')} height={48} />
        <Button label="Export Mnemonic" onPress={jump('ExportMnemonicScreen')} height={48} />
        <Button label="Export PrivateKey" onPress={jump('ExportPrivateKey')} height={48} />
        <Button label="Clear Storage" onPress={allClear} height={48} />
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
