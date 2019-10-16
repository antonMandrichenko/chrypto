import { combineReducers } from "redux";
import { authentication } from "./auth.reducer";
import { registration } from "./registration.reducer";
import { fetch } from "./fetch.reducer";

const rootReducer = combineReducers({
  authentication,
  registration,
  fetch
});

export default rootReducer;
