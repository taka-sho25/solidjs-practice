import type { Component } from 'solid-js';
import { createSignal, Show } from 'solid-js';

export const Login: Component = () => {
  const [loggedIn, setLoggedIn] = createSignal(false);

  const toggle = () => setLoggedIn(!loggedIn());

  return (
    <>
      <Show
        when={loggedIn()}
        fallback={() => <button onClick={toggle}>Log in</button>}
      >
        <button onClick={toggle}>Log out</button>
      </Show>
      {/* {loggedIn() ? (
        <button onClick={toggle}>Log out</button>
      ) : (
        <button onClick={toggle}>Log in</button>
      )} */}
    </>
  );
};
