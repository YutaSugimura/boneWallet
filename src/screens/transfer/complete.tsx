import React from 'react';
import { SafeAreaView, Text, View, Linking } from 'react-native';
import { useRoute } from '@react-navigation/core';
import { EXPLORER_LIST } from '../../common/network';
import type { TransferRouteProp } from '../../navigation/transfer';
import { Button } from '../../components/uiParts/button';

const Screen: React.VFC = () => {
  const router = useRoute<TransferRouteProp<'Complete'>>();
  const { chainId, hash } = router.params;

  const { explorerUri } = EXPLORER_LIST.filter((item) => item.chainId === chainId)[0];

  const handlePress = async () => {
    const url = explorerUri + 'tx/' + hash;
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    }
  };

  return (
    <SafeAreaView>
      <View>
        <Text>hash: {hash}</Text>
        <Button label="Open Explorer" onPress={handlePress} />
      </View>
    </SafeAreaView>
  );
};

export default Screen;
