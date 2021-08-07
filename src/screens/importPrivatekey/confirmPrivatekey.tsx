import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { DEVICE_WIDTH } from '../../common';
import { Button } from '../../components/button';
import { useSetPrivatekey } from '../../hooks/form/privatekey';

type Props = {};

const Screen: React.VFC<Props> = () => {
  const { privatekey, address, errors, setStoragePrivatekey } = useSetPrivatekey();

  if (!address && !errors) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Confirm Import PrivateKey</Text>
      </View>

      <View style={styles.stateContainer}>
        <Text style={styles.label}>ADDRESS</Text>
        <Text style={styles.value}>{address}</Text>

        <View style={styles.stateBox}>
          <Text style={styles.label}>PRIVATEKEY</Text>
          <Text style={styles.value}>{privatekey}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button label="OK" onPress={setStoragePrivatekey} height={42} width={DEVICE_WIDTH * 0.6} />
      </View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  stateContainer: {
    paddingLeft: 6,
    paddingRight: 6,
  },
  buttonContainer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stateBox: {
    paddingTop: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 14,
  },
});
