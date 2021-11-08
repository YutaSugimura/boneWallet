import React from 'react';
import { Controller } from 'react-hook-form';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { COLORS } from '../../common';
import { useInfuraForm } from '../../hooks/wallet/infuraKey';
import { Button } from '../uiParts/button';

export const InfuraKeyForm: React.VFC = () => {
  const { control, handleSubmit, onSubmit } = useInfuraForm();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Infura Key</Text>

        <Text style={styles.description}>Enter your Infura Key</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text>ProjectId</Text>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              keyboardType="default"
              placeholder="Infura Project Id"
              clearButtonMode="while-editing"
              returnKeyType="next"
              style={styles.input}
            />
          )}
          name="projectId"
          defaultValue=""
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Project Secret Key</Text>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              keyboardType="default"
              placeholder="Infura Project Secret Key"
              clearButtonMode="while-editing"
              returnKeyType="next"
              style={styles.input}
            />
          )}
          name="projectSecret"
          defaultValue=""
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button label="Save" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 12,
    paddingRight: 12,
  },
  titleContainer: {
    paddingTop: 20,
  },
  inputContainer: {
    paddingTop: 12,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 12,
  },
  input: {
    height: 40,
    backgroundColor: COLORS.white,
    paddingLeft: 8,
    paddingRight: 8,
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: 8,
  },
});
