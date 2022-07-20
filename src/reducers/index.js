import { combineReducers } from "redux";
import nextId from "./nextId";
import todos from './Todos'
const rootReducer = combineReducers({
  todos,
  nextId,

})

export default rootReducer;