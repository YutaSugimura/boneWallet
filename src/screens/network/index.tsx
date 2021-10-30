import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { useNetworkPageEffect } from '../../hooks/network/pageEffect';
import { CurrentNetwork } from '../../components/network/currentNetwork';
import { NetworkList } from '../../components/network/networkList';
import { CustomNetworkFormModal } from '../../components/network/customNetworkFormModal';

const Screen: React.VFC = () => {
  useNetworkPageEffect();

  return (
    <SafeAreaView style={styles.container}>
      <CurrentNetwork />

      <View style={styles.listContainer}>
        <NetworkList />
      </View>

      <CustomNetworkFormModal />
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    paddingTop: 20,
  },
});
