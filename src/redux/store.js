import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import myLogger from "./middlewares/myLogger";
import rootReducuer from "./rootReducer";


const store = createStore(
  rootReducuer,
  composeWithDevTools(applyMiddleware(logger, myLogger))
);

export default store