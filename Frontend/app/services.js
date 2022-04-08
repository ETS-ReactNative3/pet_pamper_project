import {useSelector, useDispatch} from 'react-redux'
import {post} from './constants';
import {header, userUrl, communityUrl} from './methods'
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import * as Location from 'expo-location';
import {setUserToken, setUserId, setUserCommunities, setUserLastName, setUserFirstName, setUserLatitude, setUserLongitude, setUserImage, setUserStatus, setUserPassword, setUserPushToken} from './redux/actions/user-info'


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

export const getUserFollowedCommunities = async (userCommunities) => {
    let result = await fetch(userUrl('communities'), {
        method: post,
        headers: header(),
        body: JSON.stringify({
            communities: userCommunities 
        })
    })

    result = await result.json()
    
    return result
}

export const getUserNearbyCommunities = async () => {
    let result = await fetch(userUrl('all_communities'), {
        method: post,
        headers: header(),
        body: JSON.stringify({})
    })

    result = await result.json()
    
    return result
}

export const addUserCommunities = async (nc_item, userToken, userId, userCommunities) => {
    let result = await fetch(userUrl('add_community'), {
        method: post,
        headers: header(),
        body: JSON.stringify({
            id: nc_item._id,
            token: userToken,
            user_id: userId,
            communities: userCommunities
        })
    })

    result = await result.json()
    
    return result
}

export const pingUserCommunityMembers = async (fc_item, userFirstName, userLastName, userLatitude, userLongitude, userImage) => {
    let result = await fetch(userUrl('ping_community'), {
        method: post,
        headers: header(),
        body: JSON.stringify({
            members: fc_item.members,
            first_name: userFirstName,
            last_name: userLastName,
            latitude: userLatitude,
            longitude: userLongitude,
            image: userImage,
        })
    })

    result = await result.json()
    
    return result
}

export const getUserVeterinaries = async () => {
    let result = await fetch(userUrl('veterinaries'), {
        method: post,
        headers: header(),
        body: JSON.stringify({})
    })

    result = await result.json()
    
    return result
}

export const getUserPetShops = async () => {
    let result = await fetch(userUrl('pet_shops'), {
        method: post,
        headers: header(),
        body: JSON.stringify({})
    })

    result = await result.json()
    
    return result
}

export const getNotifications = async (userToken) => {
    let result = await fetch(userUrl('notifications'), {
        method: post,
        headers: header(),
        body: JSON.stringify({
            token: userToken
        })
    })

    result = await result.json()
    
    return result
}

export const registerPushToken = async () => {
    let token;
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;

    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
    
    return token;
}

export const getUsersPushToken = async (fc_item) => {
    let result = await fetch(userUrl('push_token'), {
        method: post,
        headers: header(),
        body: JSON.stringify({
            members: fc_item.members,
        })
    })

    result = await result.json()

    return result  
}

export const userSignIn = async (email, password, latitude, longitude, dispatch) => {
    
    let result = await fetch(userUrl('signin'), {
        method: post,
        headers: header(),
        body: JSON.stringify({
            email: email,
            password: password,
            latitude: latitude,
            longitude: longitude
        })
    })

    result = await result.json()

    dispatch(setUserId(result._id))
    dispatch(setUserToken(result.token))
    dispatch(setUserCommunities(result.communities))
    dispatch(setUserFirstName(result.first_name))
    dispatch(setUserLastName(result.last_name))
    dispatch(setUserLatitude(result.latitude))
    dispatch(setUserLongitude(result.longitude))
    dispatch(setUserImage(result.image))
    dispatch(setUserStatus(result.status))
    dispatch(setUserPassword(result.password))
    dispatch(setUserPushToken(result.push_token))
    return result
}

export const usercurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    return location
}

export const userSignUp = async (first_name, last_name, email, password, phone_number, account_type) => {
    let push_token = await registerPushToken()
    let result = await fetch(userUrl('signup'), {
        method: post,
        headers: header(),
        body: JSON.stringify({
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
            phone_number: phone_number,
            account_type: account_type,
            push_token: push_token
        })
    })

    result = await result.json()
    
    return result.message
}

export const imageUpload = async (userToken, userImage) => {
    let result = await fetch(userUrl('image'), {
        method: post,
        headers: header(),
        body: JSON.stringify({
            token: userToken,
            image: userImage
        })
    })

    result = await result.json()
    
    return result
}

export const logoutUser = async (userToken) => {
    let result = await fetch(userUrl('logout'), {
        method: post,
        headers: header(),
        body: JSON.stringify({
            token: userToken,
        })
    })

    result = await result.json()
    
    return result
}

export const userGoogleSignIn = async (email, latitude, longitude, dispatch) => {
    
    let result = await fetch(userUrl('google_signin'), {
        method: post,
        headers: header(),
        body: JSON.stringify({
            email: email,
            latitude: latitude,
            longitude: longitude
        })
    })

    result = await result.json()

    dispatch(setUserId(result._id))
    dispatch(setUserToken(result.token))
    dispatch(setUserCommunities(result.communities))
    dispatch(setUserFirstName(result.first_name))
    dispatch(setUserLastName(result.last_name))
    dispatch(setUserLatitude(result.latitude))
    dispatch(setUserLongitude(result.longitude))
    dispatch(setUserImage(result.image))
    dispatch(setUserStatus(result.status))
    dispatch(setUserPassword(result.password))
    dispatch(setUserPushToken(result.push_token))
    return result
}