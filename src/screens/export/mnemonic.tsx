import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Button } from '../../components/button';
import { useExportMnemonic } from '../../hooks/account/mnemonic';

type Props = {};

const Screen: React.VFC<Props> = () => {
  const { mnemonic, readMnemonic } = useExportMnemonic();

  return (
    <SafeAreaView>
      <Text>Export</Text>

      <Text>mnemonic: {mnemonic}</Text>
      <Button label="export mnemonic" onPress={readMnemonic} />
    </SafeAreaView>
  );
};

export default Screen;
