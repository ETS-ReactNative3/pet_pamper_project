import {post} from './constants';
import {header, userUrl} from './methods'


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