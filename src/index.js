import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'Store/store.js';
import { BrowserRouter } from 'react-router-dom';
import { Router } from 'Routers/router.jsx';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const AppWithCallbackAfterRender = () => (
  <Provider store={store}>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);

const container = document.getElementById('app');
const app = createRoot(container);

app.render(<AppWithCallbackAfterRender />);
