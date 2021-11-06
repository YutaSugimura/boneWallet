import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRecoilValue } from 'recoil';
import { selectedAddressState } from '../../recoil/selector/selectedAddress';

type Props = {};

const Component: React.VFC<Props> = () => {
  const selectedAddress = useRecoilValue(selectedAddressState);

  if (selectedAddress === null) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const { label, address } = selectedAddress;

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Label</Text>
        <Text style={styles.value}>{label}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Address</Text>
        <Text style={styles.value}>{address}</Text>
      </View>
    </View>
  );
};

export const SelectedAddress = memo(Component);

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
  section: {
    paddingTop: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    color: 'rgba(0, 0, 0, 0.8)',
    fontSize: 14,
  },
});
