import Chips from '@material-ui/core/Chip';
import * as React from 'react';
import * as styles from './types.styles';

export const Types: React.FunctionComponent = () => (
  <div className={styles.types}>
    <Chips
      label="TS-only"
      color="default"
    />
    <Chips
      label="Maintainability"
      color="default"
      classes={{
        root: styles.button,
      }}
    />
  </div>
);
