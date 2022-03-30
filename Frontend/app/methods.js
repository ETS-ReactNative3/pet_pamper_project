import {setUserStatus} from './redux/actions/user-info'
import {useSelector, useDispatch} from 'react-redux'
import {post} from './constants'


export const userUrl = (route) => {
    return (
        'http://192.168.1.107:3000/user/' + route
    )
}

// export const userFetch = (route) => {
//     return (
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//     )
// }

export const header = () => {
    return (
        {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    )
}


export const userStatusUpdate= async (userStatus, userToken) => {
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