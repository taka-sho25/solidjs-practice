import type { Component } from 'solid-js';
import { createSignal, createEffect } from 'solid-js';

import styles from './App.module.css';

export const Counter: Component = () => {
  const [count, setCount] = createSignal(0);

  createEffect(() => {
    console.log('The count is now', count());
  });

  const doubleCount = () => count() * 2;

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <div>Count: {count()}</div>
        <div>Double Count: {doubleCount()}</div>
        <button onClick={() => setCount(count() + 1)}>Add Count</button>
        <button onClick={() => setCount(count() - 1)}>Decrease Count</button>
      </header>
    </div>
  );
};
