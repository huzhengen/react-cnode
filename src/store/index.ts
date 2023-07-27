import { tagReducer } from "./reducers";
import { createStore, combineReducers } from 'redux'

const rootReducer = combineReducers({
  tag: tagReducer,
})

export const store = createStore(rootReducer)