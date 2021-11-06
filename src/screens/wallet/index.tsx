import React from 'react';
import { View, SafeAreaView, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useReset } from '../../hooks/reset';
import type { WalletNavigationProp, WalletScreens } from '../../navigation/wallet';
import { Button } from '../../components/uiParts/button';

const Screen: React.VFC = () => {
  const navigation = useNavigation<WalletNavigationProp<'AccountTop'>>();
  const { allClear } = useReset();

  const jump = (screen: WalletScreens) => () => {
    navigation.navigate(screen);
  };

  const onChange = async () => {
    Alert.alert('Delete Data', 'Are you sure you want to delete all local data?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: allClear,
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button label="Import PrivateKey" onPress={jump('ImportPrivateKey')} height={48} />
        <Button label="Account List" onPress={jump('AccountList')} height={48} />
        <Button label="Network" onPress={jump('Network')} height={48} />
        <Button label="Export Mnemonic" onPress={jump('ExportMnemonicScreen')} height={48} />
        <Button label="Clear Storage" onPress={onChange} height={48} />
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
