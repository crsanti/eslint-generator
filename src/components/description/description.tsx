import * as React from 'react';
import * as styles from './description.styles';

export const Description: React.StatelessComponent = () => (
  <p className={styles.paragraph}>Requires lines to be under a certain max length.</p>
);
