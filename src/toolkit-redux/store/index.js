import { applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./mainReducer";



const rootReducer = combineReducers({
    main: mainReducer
})


export const storeToolkitRedux = configureStore({
    reducer: rootReducer,
})
