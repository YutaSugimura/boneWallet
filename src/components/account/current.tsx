import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRecoilValue } from 'recoil';
import { balanceState } from '../../recoil/atoms/balance';
import { currentAddressState } from '../../recoil/selector/currentAddress';
import { formatEther } from '../../utils/formatEther';

type Props = {};

export const CurrentAccount: React.VFC<Props> = () => {
  require('../../hooks/wallet/switching').useSwitchingEffect();
  require('../../hooks/wallet/balance').useBalanceEffect();
  const { address, privateKey } = useRecoilValue(currentAddressState);
  const balance = useRecoilValue(balanceState);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Address</Text>
        <Text style={styles.value}>{address}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>PrivateKey</Text>
        <Text style={styles.value}>{privateKey}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Balance</Text>
        <Text style={styles.value}>{balance !== '' ? formatEther(balance) : ''}eth</Text>
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
