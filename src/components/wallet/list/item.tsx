import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import type { AddressListItem as Type } from '../../../types/wallet';
import { COLORS, DEVICE_WIDTH } from '../../../common';
import { TextButton } from '../../uiParts/button/text';

type Props = {
  item: Type;
  onPress: () => void;
  openPrivateKey: () => void;
  removeAddress: () => void;
};

export const AddressListItem: React.VFC<Props> = ({
  item,
  onPress,
  openPrivateKey,
  removeAddress,
}) => {
  const { label, keyType, address, selected } = item;

  const formatAddress = address.slice(0, 9) + '...' + address.slice(-9);

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.leftContainer}>{selected && <View style={styles.dot} />}</View>

      <View style={styles.rightContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.address}>{formatAddress}</Text>

        <View style={styles.buttonContainer}>
          <TextButton
            label="export"
            onPress={openPrivateKey}
            fontColor="#4facfe"
            fontSize={18}
            fontWeight="bold"
          />

          {keyType === 'privatekey' && (
            <View style={styles.buttonBox}>
              <TextButton
                label="remove"
                onPress={removeAddress}
                fontColor="#4facfe"
                fontSize={18}
                fontWeight="bold"
              />
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 72,
    backgroundColor: '#F9F9F9',
    paddingTop: 6,
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
  },
  leftContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
  },
  rightContainer: {
    justifyContent: 'space-between',
    width: DEVICE_WIDTH - 20,
    paddingRight: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonBox: {
    paddingLeft: 20,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 16,
    backgroundColor: '#06BCEE',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  address: {
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: 14,
  },
});
