import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as styles from './headerStyles';
import SearchIcon from '@material-ui/icons/Search';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import InputAdornment from '@material-ui/core/InputAdornment';

interface Props {
  onImport(event: React.MouseEvent<HTMLInputElement>): void;
  onSave(event: React.MouseEvent<HTMLInputElement>): void;
  onSearch(event: React.ChangeEvent<HTMLTextAreaElement>): void;
}

export const HeaderComponent: React.StatelessComponent<Props> = (props) => (
  <div className={styles.header}>
    <div className={styles.buttonContainer}>
      <Button
        variant="contained"
        size="medium"
        onClick={props.onImport}
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
        onClick={props.onSave}
      >
        <CloudDownloadIcon
          className={styles.icon}
          fontSize="small"
        />
        Save
      </Button>
    </div>
    <TextField
      type="text"
      label="Filter rule"
      InputProps={{
        startAdornment: (
          <InputAdornment position="end">
            <SearchIcon fontSize="small" />
          </InputAdornment>
        ),
      }}
      onChange={props.onSearch}
    />
  </div>
);
