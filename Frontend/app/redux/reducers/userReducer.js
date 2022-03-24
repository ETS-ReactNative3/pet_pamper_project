import {ADD_USER_INFO} from '../constants';

const initial_state = {};

const userReducer = (state = initial_state, action) => {
    switch(action.type) {

        case ADD_USER_INFO:
            return {
                ...state,
                count: action.payload
            };

        default:
            return state;
    }
}
    export default userReducer;



