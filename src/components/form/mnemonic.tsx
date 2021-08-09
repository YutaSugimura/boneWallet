import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Controller } from 'react-hook-form';
import { useMnemonicFormHooks } from '../../hooks/form/mnemonic';
import { COLORS, DEVICE_WIDTH } from '../../common';
import { Button } from '../uiParts/button';

type Props = {};

export const MnemonicForm: React.VFC<Props> = () => {
  const { control, onSubmit, handleSubmit } = useMnemonicFormHooks();

  return (
    <View style={styles.container}>
      <Controller
        name="mnemonic"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            keyboardType="default"
            placeholder="rock stone ..."
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            clearButtonMode="while-editing"
            returnKeyType="done"
            style={styles.input}
          />
        )}
      />

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
  input: {
    height: 36,
    width: DEVICE_WIDTH * 0.9,
    backgroundColor: COLORS.white,
    paddingLeft: 6,
    paddingRight: 6,
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: 3,
    marginTop: 2,
    color: COLORS.black,
    fontSize: 16,
  },
  label: {
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: 15,
  },
});
