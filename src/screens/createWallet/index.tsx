import React from 'react';
import { ActivityIndicator, Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { Button } from '../../components/button';

type Props = {};

const Screen: React.VFC<Props> = () => {
  const { isLoading, toggle } = require('../../hooks/loading').useIsLoading();
  const { mnemonic, getMnemonic } =
    require('../../hooks/account/generateMnemonic').useGenerateMnemonic();

  const wrapGetMnemonic = async () => {
    toggle(true);

    setTimeout(() => {
      getMnemonic();
      toggle(false);
    }, 300);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {isLoading && <ActivityIndicator size="large" />}

        <View style={styles.textContainer}>
          <Text style={styles.title}>Mnemonic</Text>
          <Text style={styles.value}>{mnemonic}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            label="Generate Mnemonic"
            onPress={wrapGetMnemonic}
            disabled={isLoading}
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
});
