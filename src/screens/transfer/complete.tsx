import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
// import { useRoute } from '@react-navigation/core';
// import type { TransferRouteProp } from '../../navigation/transfer';

const Screen: React.VFC = () => {
  // const router = useRoute<TransferRouteProp<'Complete'>>();
  // const { chainId, txHash } = router.params;

  return (
    <SafeAreaView>
      <View>
        <Text>txHash</Text>
      </View>
    </SafeAreaView>
  );
};

export default Screen;
