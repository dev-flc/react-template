import React from 'react'

import { App } from './app.js'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from 'Store/store.js'

createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
