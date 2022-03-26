import {SET_USER_FOLLOWED_COMMUNITIES, SET_USER_TOKEN, SET_USER_COMMUNITIES, SET_USER_FIRST_NAME, SET_USER_LAST_NAME, SET_USER_IMAGE, SET_USER_LATITUDE, SET_USER_LONGITUDE,SET_USER_STATUS, SET_USER_PASSWORD, SET_USER_NEARBY_VETERINARIES, SET_USER_NEARBY_PET_SHOPS, SET_USER_UNFOLLOWED_COMMUNITIES} from '../constants'

// export function addUserinfo(user_info) {
//     return {
//         type: ADD_USER_INFO,
//         payload: result 
//     } 
// }

export const setUserToken = userToken => dispatch => {
    dispatch({
        type: SET_USER_TOKEN,
        payload: userToken 
    }) 
}

export const setUserCommunities = userCommunities => dispatch => {
    dispatch({
        type: SET_USER_COMMUNITIES,
        payload: userCommunities 
    }) 
}

export const setUserFirstName = userFirstName => dispatch => {
    dispatch({
        type: SET_USER_FIRST_NAME,
        payload: userFirstName 
    }) 
}

export const setUserLastName = userLastName => dispatch => {
    dispatch({
        type: SET_USER_LAST_NAME,
        payload: userLastName 
    }) 
}

export const setUserLatitude = userLatitude => dispatch => {
    dispatch({
        type: SET_USER_LATITUDE,
        payload: userLatitude 
    }) 
}

export const setUserLongitude = userLongitude => dispatch => {
    dispatch({
        type: SET_USER_LONGITUDE,
        payload: userLongitude 
    }) 
}

export const setUserImage = userImage => dispatch => {
    dispatch({
        type: SET_USER_IMAGE,
        payload: userImage 
    }) 
}

export const setUserStatus = userStatus => dispatch => {
    dispatch({
        type: SET_USER_STATUS,
        payload: userStatus 
    }) 
}

export const setUserPassword = userPassword => dispatch => {
    dispatch({
        type: SET_USER_PASSWORD,
        payload: userPassword 
    }) 
}

export const setUserFollowedCommunities = userFollowedCommunities => dispatch => {
    dispatch({
        type: SET_USER_FOLLOWED_COMMUNITIES,
        payload: userFollowedCommunities 
    }) 
}

export const setUserUnFollowedCommunities = userUnFollowedCommunities => dispatch => {
    dispatch({
        type: SET_USER_UNFOLLOWED_COMMUNITIES,
        payload: userUnFollowedCommunities 
    }) 
}

export const setUserNearbyVeterinaries = userNearbyVeterinaries => dispatch => {
    dispatch({
        type: SET_USER_NEARBY_VETERINARIES,
        payload: userNearbyVeterinaries 
    }) 
}

export const setUserNearbyPetShops = userNearbyPetShops => dispatch => {
    dispatch({
        type: SET_USER_NEARBY_PET_SHOPS,
        payload: userNearbyPetShops 
    }) 
}