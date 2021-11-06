import React from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet } from 'react-native';
import { Controller } from 'react-hook-form';
import { useImportMnemonic } from '../../hooks/wallet/mnemonic/import';
import { COLORS, DEVICE_WIDTH } from '../../common';
import { ConfirmMnemonicModal } from '../../components/wallet/confirmMnemonicModal';
import { Button } from '../../components/uiParts/button';

const Screen: React.VFC = () => {
  const { control, handleSubmit, onSubmit, reset, address, mnemonic, message, saveMnemonic } =
    useImportMnemonic();

  return (
    <SafeAreaView>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Import Mnemonic</Text>
        <Text>Import Mnemonic into this app and restore your account</Text>
      </View>

      <View style={styles.inputContainer}>
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
      </View>

      <View style={styles.buttonContainer}>
        <Button
          label="Import Mnemonic"
          onPress={handleSubmit(onSubmit)}
          height={42}
          width={DEVICE_WIDTH * 0.6}
        />
      </View>

      {message && (
        <View style={styles.buttonContainer}>
          <Text style={styles.alert}>{message}</Text>
        </View>
      )}

      <ConfirmMnemonicModal
        address={address}
        mnemonic={mnemonic}
        onPress={saveMnemonic}
        onReset={reset}
      />
    </SafeAreaView>
  );
};

export default Screen;
const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
  inputContainer: {
    alignItems: 'center',
    paddingTop: 60,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    color: COLORS.black,
    fontSize: 21,
    fontWeight: 'bold',
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
  alert: {
    color: COLORS.red,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
