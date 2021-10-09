import { createStore } from "redux";

// rootReducer 
import rootReducer from "./rootReducer";

const store = createStore(rootReducer)

export default store