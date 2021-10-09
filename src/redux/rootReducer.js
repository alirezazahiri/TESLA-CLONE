import { combineReducers } from "redux";

// reducers
import carsReducer from "./cars/carsReducer";

const rootReducer = combineReducers({
  carsState: carsReducer,
});

export default rootReducer;
