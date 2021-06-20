import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { IS_IOS, DEVICE_WIDTH } from '../../common';

type Props = {};

export const InputUrl: React.VFC<Props> = () => {
  const [state, setState] = useState<string>('');

  const { changeNetworkUrl } = require('../../context/network/url').useNetworkUrlDispatch();

  const onSubmitEditing = () => {
    changeNetworkUrl(state);
  };

  return (
    <View style={styles.container}>
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
    paddingLeft: 6,
    paddingRight: 3,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 3,
    fontSize: 16,
  },
});
