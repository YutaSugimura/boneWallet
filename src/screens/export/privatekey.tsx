import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { useRecoilValue } from 'recoil';
import { accountListState } from '../../recoil/atoms/account';
import { useAccountlistEffect } from '../../hooks/account/list';
import { useExportPrivatekey } from '../../hooks/account/privatekey';

type Props = {};

const Screen: React.VFC<Props> = () => {
  const accountList = useRecoilValue(accountListState);
  const { privatekey, readPrivatekey } = useExportPrivatekey();
  useAccountlistEffect();

  return (
    <SafeAreaView>
      <Text>Export Privatekey</Text>
      <Text>privatekey: {privatekey}</Text>

      {accountList.map((item) => (
        <>
          {item.secretkeyType !== 'mnemonic' && (
            <TouchableOpacity
              key={`accountList_${item.label}_${item.address}`}
              onPress={readPrivatekey(item.address)}
            >
              <Text>{item.label}</Text>
              <Text>{item.address}</Text>
            </TouchableOpacity>
          )}
        </>
      ))}
    </SafeAreaView>
  );
};

export default Screen;
