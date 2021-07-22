import { renderHook } from '@testing-library/react-hooks';
import { useWalletCore } from '.';

describe('test', () => {
  const { result } = renderHook(() => useWalletCore());

  expect(result.current.wallet).toBe(null);
});
