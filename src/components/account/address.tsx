import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRecoilValue } from 'recoil';
import { currentAccountState } from '../../recoil/selector/currentAccount';

type Props = {};

export const CurrentAddress: React.VFC<Props> = () => {
  const { label, address } = useRecoilValue(currentAccountState);

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
