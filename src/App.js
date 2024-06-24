import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6200ea',
    },
    secondary: {
      main: '#03dac6',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Content />
      </div>
    </ThemeProvider>
  );
};

export default App;
