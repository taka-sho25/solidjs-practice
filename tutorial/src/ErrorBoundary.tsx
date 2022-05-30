import type { Component } from 'solid-js';
import { ErrorBoundary } from 'solid-js';

type BrokenProps = {
  message: string;
};
const Broken: Component<BrokenProps> = (props) => {
  return <>{props.message}</>;
};

export const ErrorBoundaryComponent: Component = () => {
  return (
    <>
      <div>Before</div>
      <ErrorBoundary fallback={(error) => error}>
        <Broken message="Broken" />
      </ErrorBoundary>
      <div>After</div>
    </>
  );
};
