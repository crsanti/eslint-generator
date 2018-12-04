import * as React from 'react';
import { Rules } from './model';
import * as styles from './itemStyles';

interface Props {
  rule: Rules;
}

export const ItemComponent: React.StatelessComponent<Props> = (props) => (
  <li className={styles.item}>
    {props.rule.name}
  </li>
);
