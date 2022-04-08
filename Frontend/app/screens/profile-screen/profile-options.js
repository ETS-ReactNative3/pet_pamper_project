import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux'
import {styles} from './css'
import {imageUpload, logoutUser} from '../../services'

export default function ProfileOptions({navigation}) {
    const {userToken, userImage} = useSelector(state => state.userReducer)
    const [status, setStatus] = React.useState("")
        
    useEffect(async ()=> {await imageUpload(userToken, userImage)},[userImage])

    useEffect(()=> {
        if (status == "Successfully logged out") {
            navigation.navigate('Home')
        }
    }, [status])

    async function logout() {
        let result = await logoutUser(userToken)
        console.log(result.message)
        setStatus(result.message)
    }
  
    return (
        <View>
            <TouchableOpacity onPress={()=> navigation.navigate('Edit Profile')}>
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
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('Edit Status')}>
                <View style={styles.edit_area}>
                    <View style={styles.edit}>                              
                        
                        <Icon style={styles.edit_user_icon} color="black" size={25} name="edit" />
                                    
                        <View style={styles.edit_status_area}>
                            <Text style={styles.edit_text}>Edit status</Text>
                        </View>

                        <TouchableOpacity onPress={()=> navigation.navigate('Edit Status')}>
                            <Icon style={styles.edit_icon} color="black" size={25} name="angle-right" />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('Create Community')}>
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
            </TouchableOpacity>

         
            <View style={styles.edit_area}>
                <View style={styles.edit}>                              
                    
                    <Icon style={styles.edit_user_icon} color="black" size={25} name="sign-out" />     
                    
                    <View style={styles.logout_area}>
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

