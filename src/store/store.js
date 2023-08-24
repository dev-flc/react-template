import adapter from 'redux-localstorage/lib/adapters/localStorage'
import filter from 'redux-localstorage-filter'
import reducers from 'Config/reducers.js'
import { state } from 'Config/state.js'
import thunk from 'redux-thunk'
import { applyMiddleware, compose, createStore } from 'redux'
import { KEY_FILTER_PERSIST, KEYS_STORAGE } from 'Constants/constantStore.js'
import persistState, { mergePersistedState } from 'redux-localstorage'

const middleWareGeneral = store => next => action => next(action)

const reducer = compose(mergePersistedState())(reducers)

const storage = compose(filter(KEY_FILTER_PERSIST))(adapter(sessionStorage))

const enhancer = compose(
  applyMiddleware(thunk, middleWareGeneral),
  persistState(storage, KEYS_STORAGE),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
)

const store = createStore(reducer, state, enhancer)

export { store }
