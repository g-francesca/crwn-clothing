import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import HomePage from './pages/Homepage/Homepage.jsx';
import Man from './pages/Man/Man.jsx';
import theme from './theme';
import { GlobalStyle } from './App.styled'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/man' component={Man} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
