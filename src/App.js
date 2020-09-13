import React from 'react';
import { ThemeProvider } from 'styled-components';
import HomePage from './homepage.component';
import theme from './theme';

function App() {
  console.log(theme);
  
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
