import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { InfuraKeyForm } from '../../components/infuraKey';

const Screen: React.VFC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <InfuraKeyForm />
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
