import React from 'react';
import { View, Text } from 'react-native';
import { useRecoilValue } from 'recoil';
import { networkState } from '../../recoil/atoms/network';

type Props = {};

export const CurrentNetwork: React.VFC<Props> = () => {
  const networkValue = useRecoilValue(networkState);

  return (
    <View>
      <Text>Current Network</Text>
      <Text>chainId: {networkValue.chainId}</Text>
      <Text>name: {networkValue.name}</Text>
      <Text>isJsonRpcProvider {networkValue.isJsonRpcProvider}</Text>
    </View>
  );
};
