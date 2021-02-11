import Chip from '@material-ui/core/Chip';
import * as React from 'react';
import * as styles from './types.styles';

export const Types: React.FunctionComponent = () => (
  <div className={styles.types}>
    <Chip
      label="TS-only"
      color="default"
    />
    <Chip
      label="Maintainability"
      color="default"
      classes={{
        root: styles.button,
      }}
    />
  </div>
);
