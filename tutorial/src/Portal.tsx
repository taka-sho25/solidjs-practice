import type { Component } from 'solid-js';
import { Portal } from 'solid-js/web';

import styles from './Portal.module.css';

export const PortalComponent: Component = () => {
  return (
    <>
      <div class={styles['app-container']}>
        <p>overflow:hiddenが設定されている div の中にあるテキスト</p>
        <Portal>
          <div class={styles['popup']}>
            <h1>Popup</h1>
            <p>何かの時に必要になるかもしれないテキスト</p>
          </div>
        </Portal>
      </div>
    </>
  );
};
