import { legacy_createStore as createStore } from "redux";

import rootReducuer from "./rootReducer";

const store = createStore(rootReducuer);

export default store