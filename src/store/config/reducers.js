import { combineReducers } from "redux";

import { reducerTitle } from "Reducers/reducerTitle.js";

const allReducers = combineReducers({
  title: reducerTitle,
});

export default allReducers;
