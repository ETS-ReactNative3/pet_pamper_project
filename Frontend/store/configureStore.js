import { createStore, combineReducers } from 'redux';
import userReducer from '../redux/reducers/userReducer';

const rootReducer = combineReducers(
    { user_info: userReducer }
);

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;