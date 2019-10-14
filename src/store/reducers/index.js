import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
// import productsReducer from './productsReducer';
// import reviewsReducer from './reviewsReducer';
// import {firestoreReducer} from 'redux-firestore';
// import {firebaseReducer} from 'react-redux-firebase';
// import authReducer from "./authReducer";
// import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  form: formReducer
});

export default rootReducer;
