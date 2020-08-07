import React from 'react';
import Routes from './Route';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.scss';

function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Sen',
        'sans-serif',
      ].join(','),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes/>
      </div>
    </ThemeProvider>
  );
}

export default App;
