import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { IS_IOS, DEVICE_WIDTH } from '../../common';
import { Button } from '../button';

type Props = {};

export const CustomNetworkUrlForm: React.VFC<Props> = () => {
  const [state, setState] = useState<string>('');

  const { setJsonRpcProvider } = require('../../hooks/provider').useProvider();

  const onSubmitEditing = () => {
    setJsonRpcProvider(state);
  };

  return (
    <View style={styles.container}>
      <Text>current network url: {state}</Text>

      <TextInput
        keyboardType={IS_IOS ? 'url' : 'default'}
        placeholder="url"
        value={state}
        onChangeText={setState}
        onSubmitEditing={onSubmitEditing}
        clearButtonMode="while-editing"
        returnKeyType="done"
        style={styles.inputContainer}
      />

      <View style={styles.buttonContainer}>
        <Button label="Set URL" onPress={onSubmitEditing} width={DEVICE_WIDTH * 0.6} height={48} />
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
