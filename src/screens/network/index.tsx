import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { useRecoilValue } from 'recoil';
import { networkListState } from '../../recoil/atoms/network';
import { useNetworkList } from '../../hooks/network/list';
import type { RootNavigationProp } from '../../navigation';
import { DEVICE_WIDTH } from '../../common';
import { Button } from '../../components/uiParts/button';
import { CustomNetworkUrlForm } from '../../components/form/networkUrl';
import { CurrentNetwork } from '../../components/network/currentNetwork';
import { useCallback } from 'react';

type Props = {};

const Screen: React.VFC<Props> = () => {
  const navigation: RootNavigationProp<'Network'> =
    require('@react-navigation/native').useNavigation();

  const { onChangeNetwork } = useNetworkList();
  const networkList = useRecoilValue(networkListState);

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <CurrentNetwork />

        <View>
          {networkList.map((item, index) => (
            <Button
              key={`network-${item}-${index}`}
              label={item.type === 'basic' ? item.network : item.label}
              onPress={onChangeNetwork(index)}
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
