import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { RootNavigationProp } from '../../navigation';
import { DEVICE_WIDTH } from '../../common';
import { Button } from '../../components/button';
import { InputUrl } from '../../components/input/url';

type Props = {};

const Screen: React.VFC<Props> = () => {
  const navigation: RootNavigationProp<'Network'> =
    require('@react-navigation/native').useNavigation();
  const networkUrl = require('../../context/network/url').useNetworkUrlState().networkUrl;

  const save = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text>current network url: {networkUrl}</Text>
        <InputUrl />

        <View style={styles.buttonContainer}>
          <Button label="Save" onPress={save} width={DEVICE_WIDTH * 0.6} height={48} />
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
    paddingTop: 20,
  },
});
