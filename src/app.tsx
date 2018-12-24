import * as React from 'react';
import { hot } from 'react-hot-loader';
import * as styles from './app.styles';
import { Sidebar } from './components/sidebar';
import { Main } from './components/main';

let App: React.StatelessComponent = () => (
  <div className={styles.container}>
    <Sidebar />
    <Main />
  </div>
);

App = hot(module)(App);

export { App };
