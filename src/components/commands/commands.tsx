import * as React from 'react';
import Button from '@material-ui/core/Button';
import * as styles from './commands.styles';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import { Searchbar } from '../searchbar';

export const Commands: React.StatelessComponent = () => (
  <div className={styles.commands}>
    <div className={styles.buttonsContainer}>
      <Button
        variant="contained"
        size="medium"
      >
        <CloudDownloadIcon
          className={styles.icon}
          fontSize="small"
        />
        Import
      </Button>
      <Button
        variant="contained"
        size="medium"
      >
        <CloudDownloadIcon
          className={styles.icon}
          fontSize="small"
        />
        Save
      </Button>
    </div>
    <Searchbar />
  </div>
);
