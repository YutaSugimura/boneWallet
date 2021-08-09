import React from 'react';
import { View, Text } from 'react-native';
import { useRecoilValue } from 'recoil';
import { currentNetworkState } from '../../recoil/atoms/network';

type Props = {};

export const CurrentNetwork: React.VFC<Props> = () => {
  const currentNetwork = useRecoilValue(currentNetworkState);

  if (currentNetwork.type === 'basic') {
    return (
      <View>
        <Text>Current Network</Text>
        <Text>type: {currentNetwork.type}</Text>
        <Text>network: {currentNetwork.network}</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Current Network</Text>
      <Text>type: {currentNetwork.type}</Text>
      <Text>label: {currentNetwork.label}</Text>
      <Text>url: {currentNetwork.url}</Text>
    </View>
  );
};
