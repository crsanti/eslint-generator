import { Button, Typography } from '@material-ui/core';
import * as React from 'react';
import * as styles from './severity.styles';

export const Severity: React.FunctionComponent = () => (
  <div className={styles.severity}>
    <Typography variant="h6" component="h2">Severity</Typography>
    <div className={styles.buttonContainer}>
      <Button variant="outlined">default</Button>
      <Button variant="outlined">error</Button>
      <Button variant="outlined" className={styles.warningButton}>warning</Button>
      <Button variant="outlined">none</Button>
    </div>
  </div>
);
