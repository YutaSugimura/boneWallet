import React, { useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

import Config from 'react-native-config';

const Screen: React.VFC = () => {
  // useStartupCurrentAccountIndex();
  // useNetworkEffect();
  // useAccountlistEffect();

  useNetwork();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Home</Text>
      </View>

      <View>
        {/* <CurrentAddress />
        <CurrentBalance /> */}
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

import { ethers } from 'ethers';

const INFURA_PROJECT_ID = Config.INFURA_PROJECT_ID;
const INFURAPROJECT_SECRET = Config.INFURAPROJECT_SECRET;

const useNetwork = () => {
  useEffect(() => {
    const provider = new ethers.providers.InfuraProvider('ropsten', {
      projectId: INFURA_PROJECT_ID,
      projectSecret: INFURAPROJECT_SECRET,
    });

    (async () => {
      const _balance = await provider.getBalance('0xd02246eD883e8aB92F363e7a35453DcFa2052669');
      const balance = ethers.utils.formatEther(_balance);
      console.log({ balance });
    })();
  }, []);
};
