import { Fab, Typography } from '@material-ui/core';
import { Check } from '@material-ui/icons';
import * as React from 'react';
import * as styles from './type-use.styles';

export const TypeUse: React.FunctionComponent = () => (
  <div className={styles.typeUse}>
    <Typography variant="h6" component="h2">Use in</Typography>
    <div className={styles.buttonContainer}>
      <Fab variant="extended" className={`${styles.button} ${styles.buttonJavaScript}`}>
        JavaScript
      </Fab>
      <Fab variant="extended" color="primary">
        <Check className={styles.icon} fontSize="small" />
        TypeScript
      </Fab>
    </div>
  </div>
);
