import { useRecoilState } from 'recoil';
import type Ethers from 'ethers';
import { providerState } from '../../recoil/atoms/provider';

export const useProvider = () => {
  const [state, setState] = useRecoilState(providerState);

  const setBaseProvider = (network: string) => {
    if (network === '') {
      return;
    }

    const ethers: typeof Ethers = require('ethers');

    const newProvider = ethers.getDefaultProvider(network);
    setState(newProvider);
  };

  const setJsonRpcProvider = (customUrl: string) => {
    if (customUrl === '') {
      return;
    }

    const ethers: typeof Ethers = require('ethers');
    const newProvider = new ethers.providers.JsonRpcProvider(customUrl);
    setState(newProvider);
  };

  return {
    provider: state,
    setBaseProvider,
    setJsonRpcProvider,
  };
};
