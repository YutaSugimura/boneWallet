import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { useProvider } from '../../hooks/provider';
import { IS_IOS, DEVICE_WIDTH } from '../../common';
import { Button } from '../button';

type Props = {};

export const CustomNetworkUrlForm: React.VFC<Props> = () => {
  const { setJsonRpcProvider } = useProvider();
  const { control, handleSubmit } = useForm<{ customUrl: string }>();

  const onSubmit = (data: { customUrl: string }) => {
    setJsonRpcProvider(data.customUrl);
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="customUrl"
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
          label="Set URL"
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
