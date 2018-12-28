import Button from '@material-ui/core/Button';
import * as React from 'react';
import * as styles from './settingsState.styles';

export const SettingsState: React.StatelessComponent = () => (
  <div className={styles.settingsState}>
    <Button variant="outlined">
      unset
      </Button>
    <Button variant="outlined">
      false
      </Button>
    <Button variant="outlined" color="primary">
      true
      </Button>
  </div>
);
