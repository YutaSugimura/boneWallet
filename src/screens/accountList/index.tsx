import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useRecoilValue } from 'recoil';
import { accountListState } from '../../recoil/atoms/account';
import { currentAccountState } from '../../recoil/selector/currentAccount';
import { useAccountlist, useAccountlistEffect } from '../../hooks/account/list';

type Props = {};

const Screen: React.VFC<Props> = () => {
  const accountList = useRecoilValue(accountListState);
  const { currentIndex, address, label, secretkeyType } = useRecoilValue(currentAccountState);
  const { onChangeAccount } = useAccountlist();
  useAccountlistEffect();

  const handleChange = (targetAddress: string) => () => {
    onChangeAccount(targetAddress);
  };

  return (
    <SafeAreaView>
      <View>
        <Text>account list</Text>
      </View>

      <View>
        <Text>{currentIndex}</Text>
        <Text>{label}</Text>
        <Text>{address}</Text>
        <Text>{secretkeyType}</Text>
      </View>

      <View>
        {accountList.map((item) => (
          <TouchableOpacity
            key={`accountList_${item.label}_${item.address}`}
            onPress={handleChange(item.address)}
          >
            <Text>{item.label}</Text>
            <Text>{item.address}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Screen;
