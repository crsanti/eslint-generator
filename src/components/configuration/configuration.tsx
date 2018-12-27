import Button from '@material-ui/core/Button';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import * as React from 'react';
import * as styles from './configuration.styles';

export const Configuration: React.StatelessComponent = () => (
  <div className={styles.configuration}>
    <Tabs value={0} indicatorColor="primary">
      <Tab label="Rule settings" />
      <Tab label="Global settings" />
    </Tabs>
    <div className={styles.buttonsContainer}>
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
    <div className={styles.severityButtons}>
      <span className={styles.textSpan}>Severity</span>
      <div>
        <Button variant="outlined">
          default
        </Button>
        <Button variant="outlined">
          error
        </Button>
        <Button variant="outlined">
          warning
        </Button>
        <Button variant="outlined">
          none
        </Button>
      </div>
    </div>
  </div>
);
