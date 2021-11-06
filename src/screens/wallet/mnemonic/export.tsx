import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { useExportMnemonic } from '../../../hooks/wallet/mnemonic/export';
import { Button } from '../../../components/uiParts/button';
import { TextButton } from '../../../components/uiParts/button/text';

const Screen: React.VFC = () => {
  const { mnemonic, get, copyToClipboard } = useExportMnemonic();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Export</Text>
      </View>

      <View style={styles.mainContainer}>
        {mnemonic && (
          <>
            <Text style={styles.label}>Mnemonic</Text>

            <View style={styles.valueContainer}>
              <Text style={styles.value}>{mnemonic}</Text>
            </View>

            <View style={styles.valueContainer}>
              <TextButton label="copy" onPress={copyToClipboard} />
            </View>
          </>
        )}
      </View>

      <View style={styles.buttonContainer}>
        <Button
          label="Export"
          onPress={get}
          backgroundColor="#4facfe"
          borderWidth={1}
          borderRadius={40}
          fontColor="#FFF"
          fontSize={18}
          fontWeight="bold"
        />
      </View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  valueContainer: {
    paddingTop: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 18,
  },
});
