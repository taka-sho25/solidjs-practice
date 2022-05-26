import type { Component } from 'solid-js';

import styles from './App.module.css';
import { Counter } from './Counter';
import { Fibonacci } from './Fibonacci';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <Counter />
        <Fibonacci />
      </header>
    </div>
  );
};

export default App;
