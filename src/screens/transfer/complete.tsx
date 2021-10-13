import React from 'react';
import { SafeAreaView, Text, View, Linking, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/core';
import { useRecoilValue } from 'recoil';
import { transactionStatus } from '../../recoil/atoms/transaction';
import { useWaitForTransaction } from '../../hooks/transfer/waitForTransaction';
import type { TransferRouteProp } from '../../navigation/transfer';
import { EXPLORER_LIST } from '../../common/network';
import { Button } from '../../components/uiParts/button';

const Screen: React.VFC = () => {
  const router = useRoute<TransferRouteProp<'Complete'>>();
  const { chainId, txHash } = router.params;

  const status = useRecoilValue(transactionStatus);
  useWaitForTransaction(txHash);

  const { explorerUri } = EXPLORER_LIST.filter((item) => item.chainId === chainId)[0];

  const handlePress = async () => {
    const url = explorerUri + 'tx/' + txHash;
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    }
  };

  return (
    <SafeAreaView>
      <View>
        <Text>txHash: {txHash}</Text>
        <Button label="Open Explorer" onPress={handlePress} />

        <View>
          {status.status === 'pending' && <ActivityIndicator size="large" color="#00ff00" />}
          {status.status === 'complete' && <Text>Complete</Text>}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Screen;
