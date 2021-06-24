import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DEVICE_WIDTH } from '../../common';
import { useMnemonicFormDispatch, useMnemonicFormState } from '../../context/mnemonicForm';
import { Button } from '../button';
import { InputMnemonic } from '../input/mnemonic';

type Props = {};

export const MnemonicForm: React.VFC<Props> = () => {
  const { errors } = useMnemonicFormState();
  const { handleSubmit, onSubmit } = useMnemonicFormDispatch();

  if (!handleSubmit) {
    return <></>;
  }

  return (
    <View style={styles.container}>
      <InputMnemonic />
      {errors !== '' && <Text>{errors}</Text>}

      <View style={styles.buttonContainer}>
        <Button
          label="Import Mnemonic"
          onPress={handleSubmit(onSubmit)}
          height={42}
          width={DEVICE_WIDTH * 0.6}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 60,
  },
  buttonContainer: {
    paddingTop: 18,
  },
});
