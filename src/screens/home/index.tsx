import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { DEVICE_WIDTH } from '../../common';
import { SelectedAddress } from '../../components/wallet/address';
import { CurrentNetwork } from '../../components/wallet/network';
import { CurrentBalance } from '../../components/wallet/balance';
import { NetworBottomSheet } from '../../components/network/modal';
import { useSetRecoilState } from 'recoil';
import { switchBottomSheetState } from '../../recoil/atoms/ui';
import { Button } from '../../components/uiParts/button';

const Screen: React.VFC = () => {
  const setIsVisible = useSetRecoilState(switchBottomSheetState);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Home</Text>
      </View>

      <View>
        <SelectedAddress />
        <CurrentNetwork />
        <CurrentBalance />
      </View>

      <View>
        <Button label="open" onPress={() => setIsVisible((prev) => !prev)} />
      </View>

      <NetworBottomSheet />
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: DEVICE_WIDTH,
  },
});
