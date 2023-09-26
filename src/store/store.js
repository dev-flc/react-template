import { configureStore } from '@reduxjs/toolkit'
import { INITIAL_STATE } from 'Config/state.js'
import { persistReducer } from 'redux-persist'
import reducers from 'Config/reducers.js'
import storageSession from 'redux-persist/lib/storage/session'
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage: storageSession,
  version: 1
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
  preloadedState: INITIAL_STATE,
  reducer: persistedReducer
})

export default store
