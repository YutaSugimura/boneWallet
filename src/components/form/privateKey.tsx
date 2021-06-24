import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DEVICE_WIDTH } from '../../common';
import { usePrivateKeyFormDispatch, usePrivateKeyFormState } from '../../context/privateKeyForm';
import { Button } from '../button';
import { InputPrivateKey } from '../input/privateKey';

type Props = {};

export const PrivateKeyForm: React.VFC<Props> = () => {
  const { errors } = usePrivateKeyFormState();
  const { handleSubmit, onSubmit } = usePrivateKeyFormDispatch();

  if (!handleSubmit) {
    return <></>;
  }

  return (
    <View style={styles.container}>
      <InputPrivateKey />
      {errors !== '' && <Text>{errors}</Text>}

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
});
