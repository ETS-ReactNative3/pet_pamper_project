import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { Avatar, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'
import {setUserLastName, setUserFirstName, setUserPassword} from '../../redux/actions/user-info'
import {useSelector, useDispatch} from 'react-redux'
import {styles} from './css'

function EditProfileScreen({navigation}) {
    const {userToken, userFirstName, userLastName, userPassword} = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    
    const [status, setStatus] = React.useState("")
    const url = 'http://192.168.1.107:3000/user/user_info_update'
    
    async function InfoUpdate() {
 
        let result = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                first_name: userFirstName,
                last_name: userLastName,
                password: userPassword,
                token: userToken
            })
        })

        result = await result.json()
        
        setStatus(result.message)
    }


    return (
        <View style={styles.background}>
            <View style={styles.header_area}>
                <View style={styles.header}>              
                    <TouchableOpacity onPress={()=> navigation.navigate('Profile Screen')}>
                        <Avatar.Icon style={styles.header_icon} color='black' size={60} icon="chevron-left" />
                    </TouchableOpacity>

                    <View style={styles.header_text_area}>
                        <Text style={styles.header_text}>Edit Profile</Text>
                        <Icon style={styles.header_icon_arrow} size={20} name="chevron-down"/>
                    </View>

                    <TouchableOpacity onPress={()=>navigation.navigate('Notifications')}>
                        <Avatar.Icon style={styles.header_icon} size={40} icon="bell" />
                    </TouchableOpacity>
                </View>

                <Text style={styles.header_sub_title}></Text>
            </View>

            <View style= {styles.backgroudArea}>

                <View style={styles.edit_form}>

                    <Text>{status}</Text>

                    <TextInput
                        style= {styles.name_input}
                        mode="outlined"
                        label="First Name"
                        placeholder="Enter First Name"
                        value ={userFirstName}
                        onChangeText={newText => dispatch(setUserFirstName(newText))}
                    />
                    
                    <TextInput
                        style= {styles.name_input}
                        mode="outlined"
                        label="Last Name"
                        placeholder="Enter Last Name"
                        value ={userLastName}
                        onChangeText={newText => dispatch(setUserLastName(newText))}
                    />

                    <TextInput
                        style= {styles.password_input}
                        label="Password"
                        mode="outlined"
                        // secureTextEntry= {true}
                        onChangeText= {newText => dispatch(setUserPassword(newText))}
                        value ={userPassword}
                        placeholder="Enter Password"
                    />

                    <View  style={styles.button_area_edit}>
                        <TouchableOpacity style={styles.button_edit} onPress={()=> InfoUpdate()}>
                            <Text style={styles.text_edit}>UPDATE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

    </View>
    )
}



export default EditProfileScreen;