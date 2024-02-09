import { ACTIONS_TITLE } from 'Constants/store/store'

const reducerTitle = (state = {}, action = {}) => {
  let newState = state
  const { type, payload } = action

  if (type === ACTIONS_TITLE.SET_ACTION_TITLE) {
    newState = payload
  }

  return newState
}

export { reducerTitle }
