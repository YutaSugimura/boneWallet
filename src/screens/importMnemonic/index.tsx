import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../common';
import { MnemonicForm } from '../../components/form/mnemonic';

type Props = {};

const Screen: React.VFC<Props> = () => {
  return (
    <SafeAreaView>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Import Mnemonic</Text>
        <Text>Import Mnemonic into this app and restore your account</Text>
      </View>

      <MnemonicForm />
    </SafeAreaView>
  );
};

export default Screen;
const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
  title: {
    color: COLORS.black,
    fontSize: 21,
    fontWeight: 'bold',
  },
});
