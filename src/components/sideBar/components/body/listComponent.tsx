import * as React from 'react';
import { Rules } from './model';
import { ItemComponent } from './itemComponent';

interface Props {
  ruleList: Rules[];
}

export const ListComponent: React.StatelessComponent<Props> = (props) => (
  <ul>
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
