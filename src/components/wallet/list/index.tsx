import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import { useRecoilValue } from 'recoil';
import { addressListState } from '../../../recoil/atoms/wallet';
import { useWalletList } from '../../../hooks/wallet/list';
import type { AddressListItem as Type } from '../../../types/wallet';
import { AddressListItem } from './item';

export const AddressList: React.VFC = () => {
  const addressList = useRecoilValue(addressListState);
  const { changeAddress, openPrivateKeyModal, removeAddress } = useWalletList();

  const renderItem = useCallback(
    ({ item }: { item: Type }) => (
      <AddressListItem
        item={item}
        onPress={changeAddress(item.address)}
        openPrivateKey={openPrivateKeyModal(item.address, item.keyType)}
        removeAddress={removeAddress(item.address, item.keyType)}
      />
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [addressList, changeAddress],
  );

  return (
    <FlatList data={addressList} keyExtractor={(item) => item.address} renderItem={renderItem} />
  );
};
