import * as React from 'react';
import { Commands } from '../commands';
import { RuleList } from '../rule-list';
import * as styles from './sidebar.styles';

export const Sidebar: React.StatelessComponent = () => (
  <div className={styles.sidebar}>
    <Commands />
    <RuleList />
  </div>
);
