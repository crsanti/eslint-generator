import { MuiThemeProvider } from '@material-ui/core';
import * as React from 'react';
import { hot } from 'react-hot-loader';
import * as styles from './app.styles';
import { Main } from './components/main';
import { Sidebar } from './components/sidebar';
import { theme } from './theme';

let App: React.StatelessComponent = () => (
  <MuiThemeProvider theme={theme}>
    <div className={styles.container}>
      <Sidebar />
      <Main />
    </div>
  </MuiThemeProvider>
);

App = hot(module)(App);

export { App };
