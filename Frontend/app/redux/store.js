import { createStore, combineReducers, applyMiddleware } from 'redux';
import userReducer from './reducers/userReducer';
import thunk from 'redux-thunk';


const rootReducer = combineReducers(
    { userReducer }
);

export const Store = createStore(rootReducer, applyMiddleware(thunk));
