import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../common';
import { PrivateKeyForm } from '../../components/form/privateKey';

type Props = {};

const Screen: React.VFC<Props> = () => {
  return (
    <SafeAreaView>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Import Account</Text>
        <Text>Import the private key you currently have into this app</Text>
      </View>

      <PrivateKeyForm />
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