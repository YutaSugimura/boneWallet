import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

type Props = {};

const Screen: React.VFC<Props> = () => {
  return (
    <SafeAreaView>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Transfer</Text>
      </View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
