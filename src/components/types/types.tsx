import Fab from '@material-ui/core/Fab';
import * as React from 'react';
import * as styles from './types.styles';

export const Types: React.StatelessComponent = () => (
  <>
    <Fab variant="extended" className={styles.button}>
      Ts-only
    </Fab>

    <Fab variant="extended">
      Maintainability
    </Fab>
  </>
);
