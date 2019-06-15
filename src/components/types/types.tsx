import * as React from 'react';
import * as styles from './types.styles';
import { Badge } from '../badge';

export const Types: React.FunctionComponent = () => (
  <div className={styles.types}>
    <Badge>TS-only</Badge>
    <Badge>Maintainability</Badge>
  </div>
);
