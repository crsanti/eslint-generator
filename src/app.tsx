import * as React from 'react';
import { hot } from 'react-hot-loader';
import { BodyComponent } from './pages/body';
import { MenuComponent } from './pages/menu';
import { css } from 'emotion';

// Pending move styles to a file

let App: React.StatelessComponent = () => (
  <div className={
    css`display: flex;
   flex-direction: row`}>
    <MenuComponent />
    <BodyComponent />
  </div>
);

App = hot(module)(App);

export { App };
