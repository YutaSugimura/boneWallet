import { useCallback, useMemo, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { ethers } from 'ethers';
import { useRecoilValue } from 'recoil';
import { selectedAddressState } from '../../recoil/selector/selectedAddress';
import { useProvider } from './provider';

export const useBalance = () => {
  const { getProvider } = useProvider();
  const selectedAddressValue = useRecoilValue(selectedAddressState);
  const [state, setState] = useState<string>('');

  useFocusEffect(
    useCallback(() => {
      let isMounted = true;

      (async () => {
        const provider = getProvider();
        if (provider !== null && selectedAddressValue !== null) {
          const balance = await provider.getBalance(selectedAddressValue.address);
          isMounted && setState(ethers.utils.formatEther(balance));
        }
      })();

      return () => {
        isMounted = false;
      };
    }, [getProvider, selectedAddressValue]),
  );

  return useMemo(() => state, [state]);
};
