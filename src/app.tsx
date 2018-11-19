import * as React from 'react';
import { hot } from 'react-hot-loader';
import { BodyComponent } from './pages/body';
import { MenuComponent } from './pages/menu';
import { styles } from './appStyles';

let App: React.StatelessComponent = () => (
  <div className={styles}>
    <MenuComponent />
    <BodyComponent />
  </div>
);

App = hot(module)(App);

export { App };
