import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import { Avatar, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import {useSelector, useDispatch} from 'react-redux'
import {setUserImage, setUserStatus} from '../../redux/actions/user-info'
import {styles} from './css'

function ProfileScreen({navigation}) {
    const {userToken, userFirstName, userLastName, userImage, userStatus} = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    const [status, setStatus] = React.useState("")
    const url_image = 'http://192.168.1.107:3000/user/image'
    const url_logout = 'http://192.168.1.107:3000/user/logout'

    const pickImage = async () => {
        
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,4],
            base64: true,
            quality: 0.5,
        });
        dispatch(setUserImage(result.base64))
      };

            
    useEffect(async ()=> {
        let results = await fetch(url_image, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                token: userToken,
                image: userImage
            })
        })

        results = await results.json()

      },[userImage])


      useEffect(()=> {
        if (status == "Successfully logged out") {
            navigation.navigate('Home')
        }
      }, [status])


    async function logout() {
 
        let result = await fetch(url_logout, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                token: userToken
            })
        })

        result = await result.json()
        setStatus(result.message)
    }

    
    return (
        <View style={styles.background}>

            <TouchableOpacity onPress={pickImage} style={styles.edit_image_icon}>
                <Icon  color="black" size={25} name="edit" />
            </TouchableOpacity>


            <TouchableOpacity>     
                <View style= {styles.profile_image_area}>
                    {userImage == undefined ? <Image style= {styles.profile_image} source={require('../../assets/avatar.png')}/> : <Image style={styles.profile_image} source= {{uri: `data:image/gif;base64,${userImage}`}}/>}
                </View>
            </TouchableOpacity>

            <View>
                <Text style= {styles.user_name}>{userFirstName} {userLastName}</Text>
                <Text style= {styles.user_status}>{userStatus}</Text>
            </View>

            
            <View style={styles.edit_area}>
                <View style={styles.edit}>                              
                    
                    <Icon style={styles.edit_user_icon} color="black" size={25} name="user" />
                    
                    
                    <View style={styles.edit_text_area}>
                        <Text style={styles.edit_text}>Edit profile</Text>
                    </View>

                    <TouchableOpacity onPress={()=> navigation.navigate('Edit Profile')}>
                        <Icon style={styles.edit_icon} color="black" size={25} name="angle-right" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.edit_area}>
                <View style={styles.edit}>                              
                    
                    <Icon style={styles.edit_user_icon} color="black" size={25} name="user" />
                    
                    
                    <View style={styles.edit_text_area}>
                        <Text style={styles.edit_text}>Edit status</Text>
                    </View>

                    <TouchableOpacity onPress={()=> navigation.navigate('Edit Status')}>
                        <Icon style={styles.edit_icon} color="black" size={25} name="angle-right" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.edit_area}>
                <View style={styles.edit}>                              
                    
                    <Icon style={styles.create_user_icon} color="black" size={25} name="group" />
                    
                    
                    <View style={styles.create_text_area}>
                        <Text style={styles.edit_text}>Create community</Text>
                    </View>

                    <TouchableOpacity onPress={()=> navigation.navigate('Create Community')}>
                        <Icon style={styles.edit_icon} color="black" size={25} name="angle-right" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.edit_area}>
                <View style={styles.edit}>                              
                    
                    <Icon style={styles.edit_user_icon} color="black" size={25} name="sign-out" />     
                    
                    <View style={styles.edit_text_area}>
                        <Text style={styles.edit_text}>Log out</Text>
                    </View>

                    <TouchableOpacity onPress={()=> logout()}>
                        <Icon style={styles.edit_icon} color="black" size={25} name="angle-right" />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}

export default ProfileScreen;