import React from 'react';
import { Text, View } from 'react-native';
import { useRecoilValue } from 'recoil';
import { currentNetworkState } from '../../../recoil/atoms/network';

export const NetworkModalContent: React.VFC = () => {
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
        <Text>network: {network.network}</Text>
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
