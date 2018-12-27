import * as React from 'react';
import * as styles from './configuration.styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export const Configuration: React.StatelessComponent = () => (
  <div className={styles.configuration}>
      <Tabs value={0} indicatorColor="primary">
        <Tab label="Rule settings" />
        <Tab label="Global settings" />
      </Tabs>
  </div>
);
