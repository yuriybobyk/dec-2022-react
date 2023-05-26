import {combineReducers, createStore} from "redux";
import {userReducer, postReducer, commentReducer} from "../reducers";

export const store = createStore(combineReducers({postReducer, userReducer, commentReducer}))