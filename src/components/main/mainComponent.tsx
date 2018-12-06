import * as React from 'react';

interface Props {
  className: string;
}

// TODO: Pending to rename to a best name
export const MainComponent: React.StatelessComponent<Props> = (props) => (
  <div className={props.className}>
    <h1>Hello Main Component</h1>
  </div>
);
