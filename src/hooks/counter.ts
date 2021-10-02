import { useState } from 'react';

export const useCounter = () => {
  const [counter, setCounter] = useState<number>(0);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    setCounter((prev) => prev - 1);
  };

  const reset = () => {
    setCounter((prev) => prev - 1);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
