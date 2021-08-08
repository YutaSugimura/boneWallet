import React from 'react';
import { ActivityIndicator, Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { useGenerateMnemonic } from '../../hooks/account/mnemonic';
import { Button } from '../../components/button';

type Props = {};

const Screen: React.VFC<Props> = () => {
  const { isLoading, mnemonic, regenerate, saveMnemonic } = useGenerateMnemonic();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {isLoading && <ActivityIndicator size="large" />}
        {isLoading && <Text style={styles.alertText}>This process will take some time.</Text>}

        <View style={styles.textContainer}>
          <Text style={styles.title}>Mnemonic</Text>
          <Text style={styles.value}>{mnemonic}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            label="Regeneration"
            onPress={regenerate}
            disabled={isLoading}
            fontSize={14}
            fontWeight="bold"
          />

          <Button
            label="Save"
            onPress={saveMnemonic}
            disabled={!mnemonic}
            fontSize={16}
            fontWeight="bold"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
    paddingTop: 10,
  },
  buttonContainer: {
    paddingTop: 10,
  },
  title: {
    color: 'rgba(0, 0, 0, 0.8)',
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    color: 'rgba(0, 0, 0, 0.8)',
    fontSize: 14,
  },
  alertText: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.6)',
  },
});
