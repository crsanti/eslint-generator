import TextField from '@material-ui/core/TextField';
import * as React from 'react';
import * as styles from './configuration-Parameters.styles';

export const ConfigurationParameters: React.FunctionComponent = () => (
  <div className={styles.configurationParameters}>
    <TextField label="Limit" defaultValue="120" className={styles.limitField}/>
    <TextField label="Ignore patterm" defaultValue="^import|^export {(.*?)}" />
  </div>
);
