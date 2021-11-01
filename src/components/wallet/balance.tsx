import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useBalance } from '../../hooks/wallet/balance';

type Props = {};

const Component: React.VFC<Props> = () => {
  const balance = useBalance();

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Balance</Text>
        <Text style={styles.value}>{balance} ETH</Text>
      </View>
    </View>
  );
};

export const CurrentBalance = memo(Component);

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
