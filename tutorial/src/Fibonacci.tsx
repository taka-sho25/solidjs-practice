import type { Component } from 'solid-js';
import { createSignal, createMemo } from 'solid-js';

const createFib = (num: number): number => {
  if (num <= 1) {
    return 1;
  }

  return createFib(num - 1) + createFib(num - 2);
};

export const Fibonacci: Component = () => {
  const [count, setCount] = createSignal(0);

  const fib = createMemo(() => {
    console.log('createMemo');
    return createFib(count());
  });
  // const fib = () => {
  //   console.log('not memo');
  //   return createFib(count());
  // };

  return (
    <>
      <button onClick={() => setCount(count() + 1)}>Count: {count()}</button>
      <div>
        1. {fib()} {fib()} {fib()} {fib()} {fib()}
      </div>
      <div>
        2. {fib()} {fib()} {fib()} {fib()} {fib()}
      </div>
      <div>
        3. {fib()} {fib()} {fib()} {fib()} {fib()}
      </div>
      <div>
        4. {fib()} {fib()} {fib()} {fib()} {fib()}
      </div>
      <div>
        5. {fib()} {fib()} {fib()} {fib()} {fib()}
      </div>
      <div>
        6. {fib()} {fib()} {fib()} {fib()} {fib()}
      </div>
      <div>
        7. {fib()} {fib()} {fib()} {fib()} {fib()}
      </div>
      <div>
        8. {fib()} {fib()} {fib()} {fib()} {fib()}
      </div>
      <div>
        9. {fib()} {fib()} {fib()} {fib()} {fib()}
      </div>
      <div>
        10. {fib()} {fib()} {fib()} {fib()} {fib()}
      </div>
    </>
  );
};
