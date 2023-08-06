import { applyMiddleware, combineReducers} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./mainReducer";




const rootReducer = combineReducers({
    main:  mainReducer
})


export const storeSliceRedux = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
})
