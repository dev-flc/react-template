import { configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'
import thunk from 'redux-thunk'

import { INITIAL_STATE } from 'Config/initialState'
import reducers from 'Reducers/reducerAll'

const persistConfig = {
  blacklist: ['title'],
  key: process.env.NAME_APP || 'root',
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
