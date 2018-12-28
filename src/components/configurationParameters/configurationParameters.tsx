import TextField from '@material-ui/core/TextField';
import * as React from 'react';
import * as styles from './configurationParameters.styles';

export const ConfigurationParameters: React.StatelessComponent = () => (
  <div className={styles.configurationParameters}>
    <TextField label="Limit" defaultValue="120" className={styles.limitField}/>
    <TextField label="Ignore patterm" defaultValue="^import|^export {(.*?)}" />
  </div>
);
