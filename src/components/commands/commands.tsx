import Button from './node_modules/@material-ui/core/Button';
import { CloudDownload, CloudUpload } from './node_modules/@material-ui/icons';
import * as React from './node_modules/react';
import { Searchbar } from '../search-bar';
import * as styles from './commands.styles';

export const Commands: React.StatelessComponent = () => (
  <div className={styles.commands}>
    <div className={styles.buttonsContainer}>
      <Button variant="contained" size="medium">
        <CloudDownload className={styles.icon} fontSize="small" />
        Import
      </Button>
      <Button variant="contained" size="medium">
        <CloudUpload className={styles.icon} fontSize="small" />
        Save
      </Button>
    </div>
    <Searchbar />
  </div>
);
