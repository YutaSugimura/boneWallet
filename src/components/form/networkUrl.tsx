import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Controller } from 'react-hook-form';
import { useNetworkFormHooks } from '../../hooks/form/network';
import { IS_IOS, DEVICE_WIDTH } from '../../common';
import { Button } from '../uiParts/button';

type Props = {};

export const CustomNetworkUrlForm: React.VFC<Props> = () => {
  const { control, handleSubmit, onSubmit } = useNetworkFormHooks();

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="label"
        rules={{ required: true }}
        defaultValue=""
        render={({ field: { value, onChange, onBlur } }) => (
          <TextInput
            keyboardType={IS_IOS ? 'url' : 'default'}
            placeholder="label"
            clearButtonMode="while-editing"
            returnKeyType="done"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            style={styles.inputContainer}
          />
        )}
      />

      <Controller
        control={control}
        name="url"
        rules={{ required: true }}
        defaultValue=""
        render={({ field: { value, onChange, onBlur } }) => (
          <TextInput
            keyboardType={IS_IOS ? 'url' : 'default'}
            placeholder="url"
            clearButtonMode="while-editing"
            returnKeyType="done"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            style={styles.inputContainer}
          />
        )}
      />

      <View style={styles.buttonContainer}>
        <Button
          label="Save CustomNetwork"
          onPress={handleSubmit(onSubmit)}
          width={DEVICE_WIDTH * 0.6}
          height={48}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 10,
  },
  inputContainer: {
    height: 40,
    width: DEVICE_WIDTH * 0.9,
    backgroundColor: '#fff',
    paddingLeft: 6,
    paddingRight: 3,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 3,
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
});
