import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'Store/store.js';
import { BrowserRouter } from 'react-router-dom';
import { Router } from 'Routers/router.jsx';

const AppWithCallbackAfterRender = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>
);

const container = document.getElementById('app');
const app = createRoot(container);

app.render(<AppWithCallbackAfterRender />);
