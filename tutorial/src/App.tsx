import type { Component } from 'solid-js';

import styles from './App.module.css';
import { Counter } from './Counter';
import { Fibonacci } from './Fibonacci';
import { Login } from './Show';
import { List } from './For';
import { Between } from './Switch';
import { Colors } from './Dynamic';
import { PortalComponent } from './Portal';
import { ErrorBoundaryComponent } from './ErrorBoundary';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        {/* <Counter /> */}
        {/* <Fibonacci /> */}
        {/* <Login /> */}
        {/* <List /> */}
        {/* <Between /> */}
        {/* <Colors /> */}
        {/* <PortalComponent /> */}
        <ErrorBoundaryComponent />
      </header>
    </div>
  );
};

export default App;
