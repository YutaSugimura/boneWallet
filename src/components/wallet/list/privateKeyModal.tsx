import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import QRCode from 'react-native-qrcode-svg';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { exportPrivateKeyModalState } from '../../../recoil/atoms/ui';
import { useExportPrivateKey } from '../../../hooks/wallet/privateKey/export';
import { COLORS, DEVICE_HEIGHT, DEVICE_WIDTH } from '../../../common';
import { TextButton } from '../../uiParts/button/text';

export const ExportPrivateKeyModal: React.VFC = () => {
  const { isVisible } = useRecoilValue(exportPrivateKeyModalState);
  const resetModal = useResetRecoilState(exportPrivateKeyModalState);
  const { privateKey, copyToClipboard } = useExportPrivateKey();

  return (
    <View>
      <Modal
        style={styles.modal}
        isVisible={isVisible}
        onBackdropPress={resetModal}
        useNativeDriver
        useNativeDriverForBackdrop
      >
        <View style={styles.container}>
          <Text style={styles.title}>Export PrivateKey</Text>

          <View>
            <QRCode value={privateKey} size={DEVICE_WIDTH * 0.6} />
          </View>

          <View>
            <TextButton
              label="copy"
              onPress={copyToClipboard}
              fontColor="#4facfe"
              fontSize={20}
              fontWeight="bold"
            />
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
    justifyContent: 'space-between',
    alignItems: 'center',
    width: DEVICE_WIDTH * 0.8,
    height: DEVICE_HEIGHT * 0.5,
    backgroundColor: COLORS.white,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
  },
});
