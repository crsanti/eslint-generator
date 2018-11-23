import * as React from 'react';
import { hot } from 'react-hot-loader';
import { MainComponent } from './components/main';
import { SideBarComponent } from './components/sideBar';
import * as styles from './appStyles';

let App: React.StatelessComponent = () => (
  <div className={styles.container}>
    <SideBarComponent />
    <MainComponent />
  </div>
);

App = hot(module)(App);

export { App };
