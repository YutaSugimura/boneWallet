import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import type { RootNavigationProp } from '../../navigation';
import NetworkContext from '../../context/network/url';
import { DEVICE_WIDTH } from '../../common';
import { DEFAULT_NETWORK_LIST } from '../../common/network';
import { Button } from '../../components/button';
import { InputUrl } from '../../components/input/url';
import { CurrentNetwork } from '../../components/currentNetwork';

type Props = {};

const Screen: React.VFC<Props> = () => {
  const navigation: RootNavigationProp<'Network'> =
    require('@react-navigation/native').useNavigation();
  const networkUrl = require('../../context/network/url').useNetworkUrlState().networkUrl;

  const { setBaseProvider } = require('../../context/provider').useProviderDispatch();

  const changeNetwork = (newNetwork: string) => () => {
    setBaseProvider(newNetwork);
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <NetworkContext>
      <SafeAreaView style={styles.container}>
        <View style={styles.inner}>
          <CurrentNetwork />

          <View>
            {DEFAULT_NETWORK_LIST.map((item) => (
              <Button
                label={item}
                onPress={changeNetwork(item)}
                width={DEVICE_WIDTH * 0.6}
                height={48}
              />
            ))}
          </View>

          <View>
            <Text>Custom URL</Text>

            <Text>current network url: {networkUrl}</Text>
            <InputUrl />

            <View style={styles.buttonContainer}>
              <Button label="Back" onPress={goBack} width={DEVICE_WIDTH * 0.6} height={48} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </NetworkContext>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  inner: {
    width: DEVICE_WIDTH * 0.9,
    paddingTop: 30,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
});
