import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useRecoilValue } from 'recoil';
import { providerState } from '../../recoil/atoms/provider';
import { getNetwork } from '../../utils/getNetwork';

type Props = {};

export const CurrentNetwork: React.VFC<Props> = () => {
  const provider = useRecoilValue(providerState);
  const [state, setState] = useState<string>('');

  useEffect(() => {
    (async () => {
      if (provider === null) {
        return;
      }

      const network = await getNetwork(provider);
      if (network) {
        setState(network.name);
      }
    })();
  }, [provider]);

  return (
    <View>
      <Text>Current Network: {state}</Text>
    </View>
  );
};
