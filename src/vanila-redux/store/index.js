import { applyMiddleware, combineReducers, createStore } from 'redux';
import { customerReducer } from './customerReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { cashReducer } from './cashReducer';


const rootReducer = combineReducers({
    cash: cashReducer,
    customer: customerReducer
})

export const storeVanillaRedux = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


