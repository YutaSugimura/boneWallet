import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { useGenerateMnemonic } from '../../hooks/wallet/mnemonic/create';
import { Button } from '../../components/uiParts/button';
import { LoadingContent } from '../../components/wallet/loading';
import { TextButton } from '../../components/uiParts/button/text';

const Screen: React.VFC = () => {
  const { isLoading, mnemonic, saveMnemonic, refetch, copyToClipboard } = useGenerateMnemonic();

  if (isLoading) {
    return <LoadingContent />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Mnemonic</Text>
        <Text style={styles.value}>{mnemonic}</Text>

        <View style={styles.copyContainer}>
          <TextButton
            label="Copy"
            onPress={copyToClipboard}
            fontColor="#4facfe"
            fontSize={18}
            fontWeight="bold"
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          label="Regeneration"
          onPress={refetch}
          disabled={isLoading}
          borderRadius={40}
          fontColor="#4facfe"
          fontSize={16}
          fontWeight="bold"
        />

        <Button
          label="Save"
          onPress={saveMnemonic}
          disabled={isLoading}
          backgroundColor="#4facfe"
          borderWidth={0}
          borderRadius={40}
          marginTop={12}
          fontColor="#FFF"
          fontSize={16}
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
  textContainer: {
    flex: 2,
    alignItems: 'center',
    paddingTop: 30,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  copyContainer: {
    paddingTop: 16,
  },
  title: {
    color: 'rgba(0, 0, 0, 0.8)',
    fontSize: 24,
    fontWeight: 'bold',
  },
  value: {
    color: 'rgba(0, 0, 0, 0.8)',
    fontSize: 16,
    paddingTop: 10,
  },
});
