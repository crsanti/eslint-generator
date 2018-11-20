import * as React from 'react';
import { hot } from 'react-hot-loader';
import { MainComponent } from './pages/main';
import { SideBarComponent } from './pages/sideBar';
import * as styles from './appStyles';

let App: React.StatelessComponent = () => (
  <div className={styles.container}>
    <SideBarComponent />
    <MainComponent />
  </div>
);

App = hot(module)(App);

export { App };
