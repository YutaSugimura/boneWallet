import React from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useSetRecoilState } from 'recoil';
import type { WalletNavigationProp } from '../../navigation/wallet';
import { customNetworkFormModalState } from '../../recoil/atoms/ui';

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
            <Text>+</Text>
          </TouchableOpacity>
        ),
      });
    }, [navigate, onPress]),
  );
};
