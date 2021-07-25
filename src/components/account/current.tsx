import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRecoilValue } from 'recoil';
import { walletState } from '../../recoil/atoms/wallet';
import { formatEther } from '../../utils/formatEther';

type Props = {};

export const CurrentAccount: React.VFC<Props> = () => {
  require('../../hooks/wallet/switching').useSwitchingEffect();
  const wallet = useRecoilValue(walletState);
  const { balance }: { balance: string } = require('../../hooks/wallet/balance').useBalance();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Address</Text>
        <Text style={styles.value}>{wallet !== null ? wallet.address : ''}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>PrivateKey</Text>
        <Text style={styles.value}>{wallet !== null ? wallet.privateKey : ''}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Balance</Text>
        <Text style={styles.value}>{balance !== '' ? formatEther(balance) : ''}</Text>
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
