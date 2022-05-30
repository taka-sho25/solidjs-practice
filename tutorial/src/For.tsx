import type { Component } from 'solid-js';
import { For, Index } from 'solid-js';

export const List: Component = () => {
  const cats = [
    { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
    { id: 'z_AbfPXTKms', name: 'Maru' },
    { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' },
  ];

  return (
    <ul>
      <For each={cats}>
        {(cat, idx) => (
          <li>
            <a
              href={`https://www.youtube.com/watch?v=${cat.id}`}
              target="_blank"
            >
              {idx() + 1}: {cat.name}
            </a>
          </li>
        )}
      </For>
      {/* {cats.map((cat, idx) => {
        return (
          <li key={cat.id}>
            <a
              href={`https://www.youtube.com/watch?v=${cat.id}`}
              target="_blank"
            >
              {idx + 1}: {cat.name}
            </a>
          </li>
        );
      })} */}
      <Index each={cats}>
        {(cat, idx) => (
          <li>
            <a
              href={`https://www.youtube.com/watch?v=${cat().id}`}
              target="_blank"
            >
              {idx + 1}: {cat().name}
            </a>
          </li>
        )}
      </Index>
    </ul>
  );
};
