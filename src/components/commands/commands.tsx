import Button from '@material-ui/core/Button';
import { CloudDownload, CloudUpload } from '@material-ui/icons';
import * as React from 'react';
import { Searchbar } from '../search-bar';
import * as styles from './commands.styles';

export const Commands: React.StatelessComponent = () => (
  <div className={styles.container}>
    <div className={styles.buttonsContainer}>
      <Button variant="contained" size="medium" className={styles.button}>
        <CloudDownload className={styles.icon} fontSize="small" />
        Import
      </Button>
      <Button variant="contained" size="medium" className={styles.button}>
        <CloudUpload className={styles.icon} fontSize="small" />
        Save
      </Button>
    </div>
    <Searchbar />
  </div>
);
