import { Paper, Input } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import * as React from 'react';
import * as styles from './searchbar.styles';

export const Searchbar: React.StatelessComponent = () => (
  <Paper className={styles.searchbar}>
    <SearchIcon fontSize="small" className={styles.icon} />
    <Input placeholder="Filter rule" disableUnderline />
  </Paper>
);
