import React from 'react';
import { ActivityIndicator, Text, View, SafeAreaView } from 'react-native';
import { Button } from '../../components/button';

type Props = {};

const Screen: React.VFC<Props> = () => {
  const { isLoading, toggle } = require('../../hooks/loading').useIsLoading();
  const { mnemonic, getMnemonic } =
    require('../../hooks/account/generateMnemonic').useGenerateMnemonic();

  const wrapGetMnemonic = async () => {
    toggle(true);

    setTimeout(() => {
      getMnemonic();
      toggle(false);
    }, 300);
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Create Wallet</Text>

        {isLoading && <ActivityIndicator size="large" />}

        <Text>Mnemonic: {mnemonic}</Text>
        <Button label="generate mnemonic" onPress={wrapGetMnemonic} />
      </View>
    </SafeAreaView>
  );
};

export default Screen;
