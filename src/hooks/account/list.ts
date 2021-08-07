import { useRecoilState } from 'recoil';
import { accountListState } from '../../recoil/atoms/account';

export const useAccountlist = () => {
  const [state, setState] = useRecoilState(accountListState);

  const addAccountList = (address: string, privateKey: string, label: string) => {
    setState([...state, { address, privateKey, label }]);
  };

  return {
    addAccountList,
  };
};
