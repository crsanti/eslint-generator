import * as React from 'react';
import { BodyContainer } from './components/body';

interface Props {
  className: string;
}

// TODO: Pending to rename to a best name
export const SideBarComponent: React.StatelessComponent<Props> = (props) => (
  <div className={props.className}>
    <BodyContainer />
  </div>
);
