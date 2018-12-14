import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Sidebar } from './components/sidebar';
import * as styles from './appStyles';

let App: React.StatelessComponent = () => (
  <div className={`${styles.container}`}>
    <Sidebar />
  </div>
);

App = hot(module)(App);

export { App };
