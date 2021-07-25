import { useRecoilState } from 'recoil';
import { accountState } from '../../recoil/atoms/account';

export const useAccountlist = () => {
  const [state, setState] = useRecoilState(accountState);

  const addAccountList = (address: string, privateKey: string, label: string) => {
    setState([...state, { address, privateKey, label }]);
  };

  return {
    addAccountList,
  };
};
