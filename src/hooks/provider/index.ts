import type Ethers from 'ethers';
import { useSetRecoilState } from 'recoil';
import { providerState } from '../../recoil/atoms/provider';

const ethers: typeof Ethers = require('ethers');

export const useProvider = () => {
  const setState = useSetRecoilState(providerState);

  const setBaseProvider = (network: string) => {
    const newProvider = ethers.getDefaultProvider(network);
    setState(newProvider);
  };

  const setJsonRpcProvider = async (customUrl: string) => {
    const newProvider = new ethers.providers.JsonRpcProvider(customUrl);
    setState(newProvider);
  };

  return {
    setBaseProvider,
    setJsonRpcProvider,
  };
};
