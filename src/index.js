import React from 'react'

import { App } from './app.js'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from 'Store/store.js'

import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

import { INITIAL_STATE } from 'Config/state.js'

const persistor = persistStore(store, [INITIAL_STATE])

createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
