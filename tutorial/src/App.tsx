import type { Component } from 'solid-js';

import styles from './App.module.css';
import { Counter } from './Counter';
import { Fibonacci } from './Fibonacci';
import { Login } from './Show';
import { List } from './For';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        {/* <Counter /> */}
        {/* <Fibonacci /> */}
        {/* <Login /> */}
        <List />
      </header>
    </div>
  );
};

export default App;
