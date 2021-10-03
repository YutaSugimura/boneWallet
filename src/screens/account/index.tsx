import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { AccountNavigationProp } from '../../navigation/account';
import { Button } from '../../components/uiParts/button';

type Props = {};

const Screen: React.VFC<Props> = () => {
  const navigation = useNavigation<AccountNavigationProp<'AccountTop'>>();

  const importPrivateKey = () => {
    navigation.navigate('ImportPrivateKey');
  };

  const accountList = () => {
    navigation.navigate('AccountList');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button label="Import PrivateKey" onPress={importPrivateKey} height={48} />
        <Button label="Account List" onPress={accountList} height={48} />
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
