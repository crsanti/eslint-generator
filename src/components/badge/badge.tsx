import { Typography } from '@material-ui/core';
import classnames from 'classnames';
import * as React from 'react';
import { container, text } from './badge.styles';

export const Badge: React.FunctionComponent<{ className?: string }> = ({ children, className }) => (
  <div className={container}>
    <Typography
      variant="caption"
      classes={{ root: classnames(text, className) }}
      component="span"
    >{children}</Typography>
  </div>
);
