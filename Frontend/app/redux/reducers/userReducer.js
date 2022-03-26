import {SET_USER_FOLLOWED_COMMUNITIES, SET_USER_TOKEN, SET_USER_COMMUNITIES, SET_USER_FIRST_NAME, SET_USER_LAST_NAME, SET_USER_LATITUDE, SET_USER_LONGITUDE, SET_USER_IMAGE, SET_USER_STATUS, SET_USER_PASSWORD, SET_USER_NEARBY_VETERINARIES, SET_USER_NEARBY_PET_SHOPS, SET_USER_UNFOLLOWED_COMMUNITIES, ADD_FOLLOWED_COMMUNNITY} from '../constants';


const initial_state = {
    userToken: "",
    userCommunities: {},
    userFirstName: "",
    userLastName: "",
    userLatitude: "",
    userLongitude: "",
    userImage: "",
    userStatus: "",
    userPassword: "",
    userFollowedCommunities: [],
    userUnFollowedCommunities: [],
    userNearbyVeterinaries: [],
    userNearbyPetShops: []
};

const userReducer = (state = initial_state, action) => {
    switch(action.type) {

        case SET_USER_TOKEN:
            return {
                ...state,
                userToken: action.payload
            };
        
        case SET_USER_COMMUNITIES:
            return {
                ...state,
                userCommunities: action.payload
            };

        case SET_USER_FIRST_NAME:
            return {
                ...state,
                userFirstName: action.payload
            };

        case SET_USER_LAST_NAME:
            return {
                ...state,
                userLastName: action.payload
            };
      
        case SET_USER_LATITUDE:
            return {
                ...state,
                userLatitude: action.payload
            };

        case SET_USER_LONGITUDE:
            return {
                ...state,
                userLongitude: action.payload
            };

        case SET_USER_IMAGE:
            return {
                ...state,
                userImage: action.payload
            };

        case SET_USER_STATUS:
            return {
                ...state,
                userStatus: action.payload
            };
        
        case SET_USER_PASSWORD:
            return {
                ...state,
                userPassword: action.payload
            };
        
        case SET_USER_FOLLOWED_COMMUNITIES:
            return {
                ...state,
                userFollowedCommunities: action.payload
            };
        
        case SET_USER_UNFOLLOWED_COMMUNITIES:
            return {
                ...state,
                userUnFollowedCommunities: action.payload
            };
        
        case SET_USER_NEARBY_VETERINARIES:
            return {
                ...state,
                userNearbyVeterinaries: action.payload
            };
        
        case SET_USER_NEARBY_PET_SHOPS:
            return {
                ...state,
                userNearbyPetShops: action.payload
            };

        case ADD_FOLLOWED_COMMUNNITY:
            return {
                ...state,
                userFollowedCommunities: [...state.userFollowedCommunities, action.payload]
            };

        default:
            return state;
    }
}
    export default userReducer;