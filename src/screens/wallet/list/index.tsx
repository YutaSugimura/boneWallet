import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { COLORS } from '../../../common';
import { Loading } from '../../../components/loading';
import { AddressList } from '../../../components/wallet/list';
import { ExportPrivateKeyModal } from '../../../components/wallet/list/privateKeyModal';

const Screen: React.VFC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AddressList />
      <ExportPrivateKeyModal />
      <Loading />
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
