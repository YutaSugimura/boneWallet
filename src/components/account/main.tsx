import React from 'react';
import { Text, View } from 'react-native';
import { useMainAccount } from '../../hooks/account/mainAccount';

export const MainAccount: React.VFC = () => {
  const { mnemonic } = useMainAccount();

  console.log(mnemonic);

  return (
    <View>
      <Text>Main Account</Text>
      <Text>Mnemonic</Text>
      <Text>{mnemonic}</Text>
    </View>
  );
};
