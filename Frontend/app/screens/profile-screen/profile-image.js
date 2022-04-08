import React, {useEffect} from 'react';
import {View, Image, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector, useDispatch} from 'react-redux'
import {setUserImage} from '../../redux/actions/user-info'
import {styles} from './css'
import {imageUri, userProfileImage} from '../../methods'
import {imageUpload, logoutUser} from '../../services'

export default function ProfileImage() {
    const {userToken, userImage} = useSelector(state => state.userReducer)
    const dispatch = useDispatch()

    const pickImage = async () => {   
        let result = await userProfileImage()
        dispatch(setUserImage(result.base64))
      };
    
    useEffect(async ()=> {await imageUpload(userToken, userImage)},[userImage])

    return (
        <View>         
            <TouchableOpacity onPress={pickImage} style={styles.edit_image_icon}>
                <Icon  color="black" size={25} name="edit" />
            </TouchableOpacity>

            <TouchableOpacity>     
                <View style= {styles.profile_image_area}>
                    {userImage == undefined ? <Image style= {styles.profile_image} source={require('../../assets/avatar.png')}/> : <Image style={styles.profile_image} source= {{uri: imageUri(userImage)}}/>}
                </View>
            </TouchableOpacity>
        </View>           
    );
}
