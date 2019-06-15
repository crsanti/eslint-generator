import Fab from '@material-ui/core/Fab';
import Check from '@material-ui/icons/Check';
import * as React from 'react';
import * as styles from './typeUse.styles';

export const TypeUse: React.FunctionComponent = () => (
  <div className={styles.typeUse}>
    <span className={styles.textSpan}>Use in</span>
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
