import React from 'react';
import { Controller } from 'react-hook-form';
import { View, StyleSheet, TextInput } from 'react-native';
import { usePrivatekeyFormHooks } from '../../hooks/form/privateKey';
import { COLORS, DEVICE_WIDTH } from '../../common';
import { Button } from '../button';

type Props = {};

export const PrivateKeyForm: React.VFC<Props> = () => {
  const { control, handleSubmit, onSubmit } = usePrivatekeyFormHooks();

  return (
    <View style={styles.container}>
      <Controller
        name="privateKey"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            keyboardType="default"
            placeholder="0x123abc"
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
          label="Import PrivateKey"
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
