import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import * as React from 'react';
import { SettingsState } from '../settingsState';
import { Severity } from '../severity';
import { TypeUse } from '../typeUse';
import * as styles from './configuration.styles';

export const Configuration: React.StatelessComponent = () => (
  <div className={styles.configuration}>
    <Tabs value={0} indicatorColor="primary">
      <Tab label="Rule settings" />
      <Tab label="Global settings" />
    </Tabs>
    <SettingsState />
    <Severity />
    <TypeUse />
  </div>
);
