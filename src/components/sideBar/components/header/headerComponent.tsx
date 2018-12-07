import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as styles from './headerStyles';

export const HeaderComponent: React.StatelessComponent = () => (
  <div className={styles.header}>
    <div className={styles.buttonContainer}>
      <Button
        variant="contained"
        size="small"
      >
        Import
      </Button>
      <Button
        variant="contained"
        size="small"
      >
        Save
      </Button>
    </div>
    <TextField
      variant="filled"
      type="text"
      label="Filter rule"
    >
    </TextField>
  </div>
);
