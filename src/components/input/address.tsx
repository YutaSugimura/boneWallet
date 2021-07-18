import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { DEVICE_WIDTH } from '../../common';

type Props = {
  value: string;
  onChangeText: (newValue: string) => void;
};

export const InputAddress: React.VFC<Props> = ({ value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        keyboardType="default"
        placeholder="0x123abc..."
        value={value}
        onChangeText={onChangeText}
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
