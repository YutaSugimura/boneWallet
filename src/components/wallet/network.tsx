import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRecoilValue } from 'recoil';
import { currentNetworkState } from '../../recoil/atoms/network';

export const CurrentNetwork: React.VFC = () => {
  const networkValues = useRecoilValue(currentNetworkState);

  if (networkValues.isLoading) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Network</Text>
        <Text style={styles.value}>Loading...</Text>
      </View>
    );
  }

  const { networkName } = networkValues.network;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Network</Text>
      <Text style={styles.value}>{networkName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
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
