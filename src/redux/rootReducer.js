import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import dynamicCounterReducer from "./dynamicCounter/dynamicCounterReducer";

const rootReducuer = combineReducers({
    counter: counterReducer,
    dynamicCounter: dynamicCounterReducer
})

export default rootReducuer;