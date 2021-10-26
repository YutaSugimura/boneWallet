import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { useRecoilValue } from 'recoil';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../common';
import { loadingState } from '../../recoil/atoms/ui';

export const Loading: React.VFC = () => {
  const isVisible = useRecoilValue(loadingState);

  if (!isVisible) {
    return <></>;
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#06BCEE" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: DEVICE_HEIGHT,
    width: DEVICE_WIDTH,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    zIndex: 10,
  },
});
