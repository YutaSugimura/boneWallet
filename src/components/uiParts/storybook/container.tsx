import type { ReactChild, VFC } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

type Props = {
  children: ReactChild;
};

export const StorybookContainer: VFC<Props> = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    maxWidth: width,
    maxHeight: height,
  },
});
