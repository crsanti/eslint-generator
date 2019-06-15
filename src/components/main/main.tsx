import * as React from 'react';
import { CodePreview } from '../code-preview';
import { Configuration } from '../configuration';
import { Details } from '../details';
import * as styles from './main.sytes';

export const Main: React.FunctionComponent = () => (
  <div className={styles.main}>
    <Details />
    <CodePreview />
    <Configuration />
  </div>
);
