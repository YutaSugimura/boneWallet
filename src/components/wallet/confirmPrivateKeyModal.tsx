import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { useRecoilValue } from 'recoil';
import { importPrivateKeyModalState } from '../../recoil/atoms/ui';
import { COLORS, DEVICE_HEIGHT, DEVICE_WIDTH } from '../../common';
import { Button } from '../uiParts/button';
import { TextButton } from '../uiParts/button/text';

type Props = {
  label?: string;
  address?: string;
  privateKey?: string;
  onPress?: () => void;
  onReset?: () => void;
};

export const ConfirmPrivateKeyModal: React.VFC<Props> = ({
  label,
  address,
  privateKey,
  onPress,
  onReset,
}) => {
  const isVisible = useRecoilValue(importPrivateKeyModalState);

  return (
    <View>
      <Modal style={styles.modal} isVisible={isVisible}>
        <View style={styles.container}>
          <Text style={styles.title}>Confirm</Text>
          <Text style={styles.text}>Are you sure it's your account?</Text>
          <View>
            {label && (
              <View>
                <Text style={styles.label}>Label</Text>
                <Text style={styles.value}>{label}</Text>
              </View>
            )}

            {address && (
              <View>
                <Text style={styles.label}>Address</Text>
                <Text style={styles.value}>{address}</Text>
              </View>
            )}

            {privateKey && (
              <View style={{ paddingTop: 20 }}>
                <Text style={styles.label}>privateKey</Text>
                <Text style={styles.value}>{privateKey}</Text>
              </View>
            )}
          </View>
          <View style={styles.buttonContainer}>
            {onPress && (
              <Button
                label="save"
                onPress={onPress}
                width={DEVICE_WIDTH * 0.7}
                height={40}
                backgroundColor="#4facfe"
                borderWidth={0}
                borderRadius={40}
                fontColor="#FFF"
                fontSize={18}
                fontWeight="bold"
              />
            )}

            {onReset && <TextButton label="cancel" onPress={onReset} />}
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
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
  },
});
