import React from 'react';
import { ThemeProvider } from 'styled-components';
import HomePage from './pages/Homepage/Homepage.jsx';
import theme from './theme';
import { GlobalStyle } from './App.styled'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
