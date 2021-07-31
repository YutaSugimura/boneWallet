import type Ethers from 'ethers';
import { useSetRecoilState } from 'recoil';
import { providerState } from '../../recoil/atoms/provider';
import { networkState } from '../../recoil/atoms/network';

const ethers: typeof Ethers = require('ethers');

export const useProvider = () => {
  const setProviderState = useSetRecoilState(providerState);
  const setNetworkState = useSetRecoilState(networkState);

  const setBaseProvider = async (network: string) => {
    const newProvider = ethers.getDefaultProvider(network);
    const newNetwork = await newProvider.getNetwork();

    setProviderState(newProvider);
    setNetworkState({
      chainId: newNetwork.chainId,
      name: newNetwork.name,
      isJsonRpcProvider: false,
    });
  };

  const setJsonRpcProvider = async (customUrl: string) => {
    const newProvider = new ethers.providers.JsonRpcProvider(customUrl);
    const newNetwork = await newProvider.getNetwork();

    setProviderState(newProvider);
    setNetworkState({
      chainId: newNetwork.chainId,
      name: newNetwork.name,
      isJsonRpcProvider: true,
    });
  };

  return {
    setBaseProvider,
    setJsonRpcProvider,
  };
};
