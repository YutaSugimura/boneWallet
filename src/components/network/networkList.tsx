import React, { useCallback } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRecoilValue } from 'recoil';
import { currentNetworkState } from '../../recoil/atoms/network';
import { useNetworkList } from '../../hooks/network/list';
import type { BasicNetwork } from '../../types/network';
import { COLORS, DEVICE_WIDTH } from '../../common';
import { NETWORK_LIST } from '../../common/network';
import { CustomNetworkList } from './customNetworkList';

export const NetworkList: React.VFC = () => {
  const currentNetworkValue = useRecoilValue(currentNetworkState);
  const { changeConnetNetwork } = useNetworkList();

  const renderItem = useCallback(
    ({ item }: { item: BasicNetwork }) => (
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={changeConnetNetwork(item)}
          disabled={
            !currentNetworkValue.isLoading &&
            currentNetworkValue.network.networkName === item.networkName
          }
          style={styles.button}
        >
          <Text style={styles.buttonText}>{item.networkName}</Text>
        </TouchableOpacity>
      </View>
    ),
    [changeConnetNetwork, currentNetworkValue],
  );

  return (
    <FlatList
      data={NETWORK_LIST}
      keyExtractor={(item) => item.network}
      renderItem={renderItem}
      ListFooterComponent={CustomNetworkList}
    />
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: DEVICE_WIDTH,
    height: 60,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: DEVICE_WIDTH * 0.6,
    height: 50,
    backgroundColor: COLORS.blue,
    borderRadius: 50,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
