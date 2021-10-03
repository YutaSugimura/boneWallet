import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import type { AccountNavigationProp, AccountScreens } from '../../navigation/account';
import { Button } from '../../components/uiParts/button';

type Props = {};

const Screen: React.VFC<Props> = () => {
  const navigation = useNavigation<AccountNavigationProp<'AccountTop'>>();

  const jump = (screen: AccountScreens) => () => {
    navigation.navigate(screen);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button label="Import PrivateKey" onPress={jump('ImportPrivateKey')} height={48} />
        <Button label="Account List" onPress={jump('AccountList')} height={48} />
        <Button label="Export Mnemonic" onPress={jump('ExportMnemonicScreen')} />
        <Button label="Export PrivateKey" onPress={jump('ExportPrivateKey')} />
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
