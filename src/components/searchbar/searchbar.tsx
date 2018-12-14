import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

export const Searchbar: React.StatelessComponent = () => (
  <>
    <SearchIcon fontSize="small" />
    <TextField
      placeholder="Filter rule"
    />
  </>
);
