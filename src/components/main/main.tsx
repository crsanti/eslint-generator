import * as React from 'react';
import { CodePreview } from '../codePreview';
import { Details } from '../details';
import * as styles from './main.sytes';

export const Main: React.StatelessComponent = () => (
  <div className={styles.main}>
    <Details />
    <CodePreview />
  </div>
);
