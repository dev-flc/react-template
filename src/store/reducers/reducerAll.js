import { combineReducers } from '@reduxjs/toolkit'

import { reducerTheme } from 'Reducers/reducerTheme.js'
import { reducerTitle } from 'Reducers/reducerTitle.js'

const allReducers = combineReducers({
  theme: reducerTheme,
  title: reducerTitle
})

export default allReducers
