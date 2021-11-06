import React, { memo, useCallback } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRecoilValue } from 'recoil';
import { COLORS, DEVICE_WIDTH } from '../../common';
import { useNetworkList } from '../../hooks/network/list';
import { currentNetworkState, customNetworkListState } from '../../recoil/atoms/network';
import { CustomNetwork } from '../../types/network';

export const CustomNetworkList: React.VFC = memo(() => {
  const currentNetworkValue = useRecoilValue(currentNetworkState);
  const customNetworkListValue = useRecoilValue(customNetworkListState);
  const { changeConnetNetwork } = useNetworkList();

  const renderItem = useCallback(
    ({ item }: { item: CustomNetwork }) => (
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
      data={customNetworkListValue}
      extraData={customNetworkListValue}
      keyExtractor={(item) => item.networkName}
      renderItem={renderItem}
      style={styles.container}
    />
  );
});

const styles = StyleSheet.create({
  container: {
    marginBottom: 200,
  },
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
    backgroundColor: COLORS.red,
    borderRadius: 50,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
