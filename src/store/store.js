import persistState from 'redux-localstorage'
import reducers from 'Config/reducers.js'
import { state } from 'Config/state.js'
import thunk from 'redux-thunk'
import { applyMiddleware, compose, createStore } from 'redux'

const middleWareGeneral = store => next => action => next(action)

const enhancer = compose(
  applyMiddleware(thunk, middleWareGeneral),
  persistState(['title', 'theme'], 'forever'),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(reducers, state, enhancer)

export { store }
