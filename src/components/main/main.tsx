import * as React from 'react';
import { Details } from '../details';
import { Types } from '../types';
import * as styles from './main.sytes';

export const Main: React.StatelessComponent = () => (
  <div className={styles.main}>
    <Details />
    <Types />
  </div>
);
