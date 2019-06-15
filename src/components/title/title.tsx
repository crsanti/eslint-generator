import * as React from 'react';
import * as styles from './title.styles';
import { Typography } from '@material-ui/core';

export const Title: React.FunctionComponent = () => (
  <Typography variant="h3" component="h1" className={styles.title}>max-line-length</Typography>
);
