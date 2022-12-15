import { combineReducers } from "redux";

import auth from './auth';

export default combineReducers({
    auth
})

// import {combineReducers, createStore} from "redux";
// import auth from './auth'

// const reducerFn = combineReducers({
//     auth
// })

// const store = createStore(reducerFn);

// export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "../slices/authSlice";

// const reducer = {
//     auth: authReducer
// }

// const store = configureStore({
//     reducer: reducer,
//     devTools: true
// })

// export default store