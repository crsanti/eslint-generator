import * as React from 'react';
import { Rules } from './model';

interface Props {
  rule: Rules;
}

export const ItemComponent: React.StatelessComponent<Props> = (props) => (
  <li>
    {props.rule.name}
  </li>
);
