import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { useBalance } from '../../hooks/wallet/balance';

const Screen: React.VFC = () => {
  // useStartupCurrentAccountIndex();
  // useNetworkEffect();
  // useAccountlistEffect();

  const balance = useBalance();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Home</Text>
      </View>

      <View>
        {/* <CurrentAddress />
        <CurrentBalance /> */}
        <Text>balance: {balance}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
