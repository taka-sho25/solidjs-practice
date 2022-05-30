import type { Component } from 'solid-js';
import { Switch, Match } from 'solid-js';

export const Between: Component = () => {
  const x = Math.floor(Math.random() * 15);

  return (
    // <Show
    //   when={x > 10}
    //   fallback={() => (
    //     <Show when={x < 5} fallback={() => <p>{x} is between 5 and 10</p>}>
    //       <p>{x} is less than 5</p>
    //     </Show>
    //   )}
    // >
    //   <p>{x} is greater than 10</p>
    // </Show>
    <Switch fallback={<p>{x} is between 5 and 10</p>}>
      <Match when={x > 10}>
        <p>{x} is greater than 10</p>
      </Match>
      <Match when={5 > x}>
        <p>{x} is less than 5</p>
      </Match>
    </Switch>
  );
};
