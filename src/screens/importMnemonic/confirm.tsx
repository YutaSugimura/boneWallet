import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import type { ImportMnemonicNavigationProp } from '../../navigation/importMnemonic';
import { DEVICE_WIDTH } from '../../common';
import { useMnemonicFormState } from '../../context/mnemonicForm';
import { Button } from '../../components/button';

type Props = {};

const Screen: React.VFC<Props> = () => {
  const navigation: ImportMnemonicNavigationProp<'ConfirmMnemonic'> =
    require('@react-navigation/native').useNavigation();

  const { address, mnemonic } = useMnemonicFormState();

  const onPress = () => {
    console.log({ address, mnemonic });
    navigation.popToTop();
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Confirm Import PrivateKey</Text>
      </View>

      <View style={styles.stateContainer}>
        <Text style={styles.label}>ADDRESS</Text>
        <Text style={styles.value}>{address}</Text>

        <View style={styles.stateBox}>
          <Text style={styles.label}>MNEMONIC</Text>
          <Text style={styles.value}>{mnemonic}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button label="OK" onPress={onPress} height={42} width={DEVICE_WIDTH * 0.6} />
      </View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
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
