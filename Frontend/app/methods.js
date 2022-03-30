// import {setUserStatus} from './redux/actions/user-info'
// import {useSelector, useDispatch} from 'react-redux'
import {post} from './constants'


export const userUrl = (route) => {
    return (
        'http://192.168.1.107:3000/user/' + route
    )
}

export const communityUrl = (route) => {
    return (
        'http://192.168.1.107:3000/community/' + route
    )
}


export const header = () => {
    return (
        {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    )
}

