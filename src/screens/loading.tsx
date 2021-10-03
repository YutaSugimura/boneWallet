import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const Screen: React.VFC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Bone Wallet</Text>
      </View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
