import * as React from 'react';
import { Badge } from '../badge';
import * as styles from './types.styles';

export const Types: React.FunctionComponent = () => (
  <div className={styles.types}>
    <Badge>TS-only</Badge>
    <Badge>Maintainability</Badge>
  </div>
);
