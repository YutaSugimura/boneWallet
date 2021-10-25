import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TextInput } from 'react-native';
import { Controller } from 'react-hook-form';
import { useImportPrivateKey } from '../../../hooks/wallet/privateKey/import';
import { COLORS, DEVICE_WIDTH } from '../../../common';
import { Button } from '../../../components/uiParts/button';
import { ConfirmPrivateKeyModal } from '../../../components/wallet/confirmPrivateKeyModal';

const Screen: React.VFC = () => {
  const {
    control,
    handleSubmit,
    onSubmit,
    reset,
    label,
    privateKey,
    address,
    message,
    savePrivateKey,
  } = useImportPrivateKey();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Import PrivateKey</Text>
        <Text>Import the private key you currently have into this app</Text>
      </View>

      <View style={styles.textContainer}>
        <Controller
          name="label"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              keyboardType="default"
              placeholder="main address"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              clearButtonMode="while-editing"
              returnKeyType="done"
              style={styles.input}
            />
          )}
        />
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

      {message && (
        <View style={styles.buttonContainer}>
          <Text style={styles.alert}>{message}</Text>
        </View>
      )}

      <ConfirmPrivateKeyModal
        label={label}
        address={address}
        privateKey={privateKey}
        onPress={savePrivateKey}
        onReset={reset}
      />
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
  title: {
    color: COLORS.black,
    fontSize: 21,
    fontWeight: 'bold',
  },
  textContainer: {
    alignItems: 'center',
    paddingTop: 60,
  },
  buttonContainer: {
    alignItems: 'center',
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
  alert: {
    color: COLORS.red,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
