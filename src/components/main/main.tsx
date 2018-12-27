import * as React from 'react';
import { CodePreview } from '../codePreview';
import { Configuration } from '../configuration';
import { Details } from '../details';
import * as styles from './main.sytes';

export const Main: React.StatelessComponent = () => (
  <div className={styles.main}>
    <Details />
    <CodePreview />
    <Configuration />
  </div>
);
