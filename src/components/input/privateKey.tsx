import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import { Controller } from 'react-hook-form';
import { COLORS, DEVICE_WIDTH } from '../../common';
import { usePrivateKeyFormState } from '../../context/privateKeyForm';

type Props = {};

export const InputPrivateKey: React.VFC<Props> = () => {
  const { control } = usePrivateKeyFormState();

  return (
    <View>
      <Text style={styles.label}>PrivateKey</Text>

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
    </View>
  );
};

const styles = StyleSheet.create({
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
