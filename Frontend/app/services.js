import {post} from './constants';
import {header, userUrl, communityUrl} from './methods'


export const userStatusUpdate = async (userStatus, userToken) => {
    let result = await fetch(userUrl('status'), {
        method: post,
        headers: header(),
        body: JSON.stringify({
            status: userStatus,
            token: userToken
        })
    })

    result = await result.json()

    return result.message
}

export const userInfoUpdate = async (userFirstName, userLastName, userPassword, userToken) => {
    let result = await fetch(userUrl('user_info_update'), {
        method: post,
        headers: header(),
        body: JSON.stringify({
            first_name: userFirstName,
            last_name: userLastName,
            password: userPassword,
            token: userToken
        })
    })

    result = await result.json()
    
    return result.message
}

export const userCreateCommunity = async (name, userToken, image_base64, latitude, longitude) => {
    let result = await fetch(communityUrl('create_community'), {
        method: post,
        headers: header(),
        body: JSON.stringify({
            name: name,
            token: userToken,
            image: image_base64, 
            latitude: latitude, 
            longitude: longitude, 
        })
    })

    result = await result.json()
    
    return result.message
}