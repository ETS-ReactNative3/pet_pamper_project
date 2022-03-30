// import {setUserStatus} from './redux/actions/user-info'
// import {useSelector, useDispatch} from 'react-redux'
// import {post} from './constants'
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';


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

export const userCreateCommunityImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4,3],
        base64: true,
        quality: 0.3,
    });
    
    return result
};

export const userCreateCommunityLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    return location
  };