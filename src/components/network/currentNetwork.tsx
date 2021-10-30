import React from 'react';
import { View, Text } from 'react-native';
import { useRecoilValue } from 'recoil';
import { currentNetworkState } from '../../recoil/atoms/network';

export const CurrentNetwork: React.VFC = () => {
  const currentNetworkValue = useRecoilValue(currentNetworkState);

  if (currentNetworkValue.isLoading) {
    return (
      <View>
        <Text>loading...</Text>
      </View>
    );
  }

  const network = currentNetworkValue.network;
  if (network.type === 'basic') {
    return (
      <View>
        <Text>Current Network</Text>
        <Text>type: {network.type}</Text>
        <Text>networkName: {network.networkName}</Text>
        <Text>netwrok: {network.network}</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Current Network</Text>
      <Text>type: {network.type}</Text>
      <Text>networkName: {network.networkName}</Text>
      <Text>rpcUrl: {network.rpcUrl}</Text>
      <Text>chainId: {network.chainId}</Text>
    </View>
  );
};
