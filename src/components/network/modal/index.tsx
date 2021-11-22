import React, { useCallback, useMemo, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { DEVICE_WIDTH } from '../../../common';
import { NetworkModalContent } from './contents';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { switchBottomSheetState } from '../../../recoil/atoms/ui';

export const NetworBottomSheet: React.VFC = () => {
  const isVisible = useRecoilValue(switchBottomSheetState);
  const setIsVisible = useSetRecoilState(switchBottomSheetState);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['6%', '35%'], []);

  const handleSheetChanges = useCallback(
    (index: number) => {
      console.log('handleSheetChanges', index);

      if (index === -1) {
        setIsVisible(false);
      }
    },
    [setIsVisible],
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={isVisible ? 0 : -1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      enablePanDownToClose
      animateOnMount
      style={styles.container}
    >
      <View style={styles.contentContainer}>
        <NetworkModalContent />
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    width: DEVICE_WIDTH,
  },
});
