import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Controller } from 'react-hook-form';
import Modal from 'react-native-modal';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { customNetworkFormModalState } from '../../recoil/atoms/ui';
import { useCustomNetworkForm } from '../../hooks/network/customNetworkForm';
import { COLORS, DEVICE_HEIGHT, DEVICE_WIDTH } from '../../common';
import { Button } from '../uiParts/button';

export const CustomNetworkFormModal: React.VFC = () => {
  const isVisible = useRecoilValue(customNetworkFormModalState);
  const resetModal = useResetRecoilState(customNetworkFormModalState);

  const { control, handleSubmit, onSubmit, message } = useCustomNetworkForm();

  return (
    <View>
      <Modal style={styles.modal} isVisible={isVisible} onBackdropPress={resetModal}>
        <View style={styles.container}>
          <Text style={styles.title}>Add Custom Network</Text>

          <View>
            <View>
              <Text style={styles.label}>Label</Text>
              <View style={styles.inputContainer}>
                <Controller
                  name="networkName"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      keyboardType="default"
                      placeholder="mainnet"
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      style={styles.input}
                    />
                  )}
                />
              </View>
            </View>

            <View style={styles.formContainer}>
              <Text style={styles.label}>RPC URL</Text>
              <View style={styles.inputContainer}>
                <Controller
                  name="rpcUrl"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      keyboardType="default"
                      placeholder="https://infura.main..."
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      style={styles.input}
                    />
                  )}
                />
              </View>
            </View>

            <View style={styles.formContainer}>
              <Text style={styles.label}>ChainId</Text>
              <View style={styles.inputContainer}>
                <Controller
                  name="chainId"
                  control={control}
                  rules={{ required: false }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      keyboardType="default"
                      placeholder="1"
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      style={styles.input}
                    />
                  )}
                />
              </View>
            </View>

            <View style={styles.formContainer}>
              <Text style={styles.label}>Symbol</Text>
              <View style={styles.inputContainer}>
                <Controller
                  name="symbol"
                  control={control}
                  rules={{ required: false }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      keyboardType="default"
                      placeholder="ETH"
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      style={styles.input}
                    />
                  )}
                />
              </View>
            </View>

            <View style={styles.formContainer}>
              <Text style={styles.label}>Explorer URL</Text>
              <View style={styles.inputContainer}>
                <Controller
                  name="explorerURL"
                  control={control}
                  rules={{ required: false }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      keyboardType="default"
                      placeholder="https://etherscan..."
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      style={styles.input}
                    />
                  )}
                />
              </View>
            </View>
          </View>

          {message && (
            <View>
              <Text>{message}</Text>
            </View>
          )}

          <View style={styles.buttonContainer}>
            <Button
              label="Save"
              onPress={handleSubmit(onSubmit)}
              width={DEVICE_WIDTH * 0.6}
              height={48}
              backgroundColor="#4facfe"
              borderRadius={24}
              fontColor="#FFF"
              fontSize={18}
              fontWeight="bold"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: DEVICE_WIDTH * 0.9,
    height: DEVICE_HEIGHT * 0.72,
    backgroundColor: COLORS.white,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 12,
  },
  formContainer: {
    paddingTop: 12,
  },
  inputContainer: {
    alignItems: 'center',
  },
  input: {
    height: 36,
    width: DEVICE_WIDTH * 0.6,
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
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
  },
});
