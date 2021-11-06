import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { COLORS } from '../../common';

export const LoadingContent: React.VFC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Loading...</Text>
      </View>

      <View style={styles.indicatorContainer}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>

      <View style={styles.bodyContainer}>
        <Text style={styles.body}>This process will take some time</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 16,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 15,
    paddingTop: 20,
  },
});
