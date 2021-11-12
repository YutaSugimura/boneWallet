import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { transactionModalStatus, transactionStatus } from '../../recoil/atoms/transaction';
import { useWaitForTransactionEffect } from '../../hooks/transfer/waitForTransaction';
import { COLORS, DEVICE_WIDTH } from '../../common';
import { useOpenEtherscan } from '../../hooks/transfer/openEtherscan';
import { TextButton } from '../uiParts/button/text';

export const TransactionStatusModal: React.VFC = () => {
  const transactionValues = useRecoilValue(transactionStatus);
  const isVisible = useRecoilValue(transactionModalStatus);
  const resetModal = useResetRecoilState(transactionModalStatus);
  const { handlePress } = useOpenEtherscan(
    transactionValues !== null ? transactionValues.txHash : undefined,
  );

  useWaitForTransactionEffect();

  return (
    <View>
      <Modal style={styles.modal} isVisible={isVisible} onBackdropPress={resetModal}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Transaction</Text>
          </View>

          <View style={styles.valueContainer}>
            <Text style={styles.label}>Status</Text>
            <Text style={styles.value}>{transactionValues?.status}</Text>
          </View>

          <View style={styles.valueContainer}>
            <Text style={styles.label}>TxHash</Text>
            <Text style={styles.value}>{transactionValues?.txHash}</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TextButton label="etherscan" onPress={handlePress} fontColor={COLORS.blue} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: DEVICE_WIDTH * 0.8,
    height: 240,
    backgroundColor: COLORS.white,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 12,
  },
  titleContainer: {
    alignItems: 'center',
  },
  valueContainer: {
    paddingTop: 10,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
  },
});
