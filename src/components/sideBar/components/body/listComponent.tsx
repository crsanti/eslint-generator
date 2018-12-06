import * as React from 'react';
import { Rules } from './model';
import { ItemComponent } from './itemComponent';
import * as styles from './listStyles';

interface Props {
  ruleList: Rules[];
}

export const ListComponent: React.StatelessComponent<Props> = (props) => (
  <ul className={styles.list}>
    {
      props.ruleList.map((rule) =>
        <ItemComponent
          key={rule.id}
          rule={rule}
        />,
      )
    }
  </ul>
);
