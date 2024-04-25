import { createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk"
import { rootReducer } from "./appReducers/reducers";

export const store = createStore(rootReducer, applyMiddleware(thunk))

