import { act, renderHook } from '@testing-library/react-hooks';
import { useCounter } from './counter';

describe('useCounter', () => {
  it('return the default value', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.counter).toBe(0);
  });

  it('increment', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    expect(result.current.counter).toBe(1);
  });

  it('decrement', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.decrement();
    });

    expect(result.current.counter).toBe(-1);
  });

  it('reset', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    expect(result.current.counter).toBe(1);

    act(() => {
      result.current.reset();
    });

    expect(result.current.counter).toBe(0);
  });
});
