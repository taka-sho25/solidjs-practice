import type { Component } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { createSignal, For } from 'solid-js';

const RedThing = () => <strong style="color: red">Red Thing</strong>;
const GreenThing = () => <strong style="color: green">Green Thing</strong>;
const BlueThing = () => <strong style="color: blue">Blue Thing</strong>;

const options = {
  red: RedThing,
  green: GreenThing,
  blue: BlueThing,
} as const;

type ColorList = keyof typeof options;

export const Colors: Component = () => {
  const [selectedColor, setSelectedColor] = createSignal<ColorList>('red');

  return (
    <>
      <select
        value={selectedColor()}
        onInput={(e) => setSelectedColor(e.currentTarget.value as ColorList)}
      >
        <For each={Object.keys(options)}>
          {(color) => <option value={color}>{color}</option>}
        </For>
      </select>
      <Dynamic component={options[selectedColor()]} />
    </>
  );
};
