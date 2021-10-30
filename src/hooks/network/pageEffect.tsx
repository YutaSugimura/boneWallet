import React, { useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useSetRecoilState } from 'recoil';
import { customNetworkFormModalState } from '../../recoil/atoms/ui';
import type { WalletNavigationProp } from '../../navigation/wallet';

export const useNetworkPageEffect = () => {
  const navigate = useNavigation<WalletNavigationProp<'Network'>>();
  const setModalValue = useSetRecoilState(customNetworkFormModalState);

  const onPress = useCallback(() => {
    setModalValue(true);
  }, [setModalValue]);

  useFocusEffect(
    useCallback(() => {
      navigate.setOptions({
        headerRight: () => (
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.text}>+</Text>
          </TouchableOpacity>
        ),
      });
    }, [navigate, onPress]),
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
