import { combineReducers } from "redux";
import { authentication } from "./auth.reducer";
import { registration } from "./registration.reducer";
// import {firestoreReducer} from 'redux-firestore';
// import {firebaseReducer} from 'react-redux-firebase';
// import authReducer from "./authReducer";
// import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  authentication,
  registration
});

export default rootReducer;
