import React from 'react';
import { Controller } from 'react-hook-form';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useTransfer } from '../../hooks/transfer';
import { COLORS } from '../../common';
import { Button } from '../uiParts/button';

export const TransferForm: React.VFC = () => {
  const { control, handleSubmit, onSubmit } = useTransfer();

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>To</Text>
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
              placeholder="0x123abc..."
              clearButtonMode="while-editing"
              returnKeyType="next"
              style={styles.input}
            />
          )}
          name="toAddress"
          defaultValue=""
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Amount</Text>
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
              keyboardType="numeric"
              placeholder="0.01"
              clearButtonMode="while-editing"
              returnKeyType="next"
              style={styles.input}
            />
          )}
          name="amount"
          defaultValue=""
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>MaxFee</Text>
        <Controller
          control={control}
          rules={
            {
              // required: true,
            }
          }
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              keyboardType="numeric"
              placeholder="20"
              clearButtonMode="while-editing"
              returnKeyType="next"
              style={styles.input}
            />
          )}
          name="maxFee"
          defaultValue=""
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>MaxPriorityFee</Text>
        <Controller
          control={control}
          rules={
            {
              // required: true,
            }
          }
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              keyboardType="numeric"
              placeholder="1"
              clearButtonMode="while-editing"
              returnKeyType="next"
              style={styles.input}
            />
          )}
          name="maxPriorityFee"
          defaultValue=""
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button label="Transfer" onPress={handleSubmit(onSubmit)} />
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
  inputContainer: {
    paddingTop: 12,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 20,
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
