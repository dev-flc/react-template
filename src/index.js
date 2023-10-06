import React, { StrictMode } from 'react'

import { App } from './app.js'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from 'Store/store.js'

import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

createRoot(document.getElementById('app')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
)
