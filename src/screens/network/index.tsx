import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import type { RootNavigationProp } from '../../navigation';
import { DEVICE_WIDTH } from '../../common';
import { useNetworkHooks } from '../../hooks/network';
import { DEFAULT_NETWORK_LIST } from '../../common/network';
import { Button } from '../../components/button';
import { CustomNetworkUrlForm } from '../../components/form/customNetworkUrl';
import { CurrentNetwork } from '../../components/currentNetwork';

type Props = {};

const Screen: React.VFC<Props> = () => {
  const navigation: RootNavigationProp<'Network'> =
    require('@react-navigation/native').useNavigation();

  const { changeNetwork } = useNetworkHooks();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <CurrentNetwork />

        <View>
          {DEFAULT_NETWORK_LIST.map((item, index) => (
            <Button
              key={`network-${item}-${index}`}
              label={item}
              onPress={changeNetwork(item)}
              width={DEVICE_WIDTH * 0.6}
              height={48}
            />
          ))}
        </View>

        <View>
          <Text>Custom URL</Text>

          <CustomNetworkUrlForm />

          <View style={styles.buttonContainer}>
            <Button label="Back" onPress={goBack} width={DEVICE_WIDTH * 0.8} height={48} />
          </View>
        </View>
      </View>
    </SafeAreaView>
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
    paddingTop: 50,
  },
});
