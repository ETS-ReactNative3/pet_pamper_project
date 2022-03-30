import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { Avatar, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'
import {setUserLastName, setUserFirstName, setUserPassword} from '../../redux/actions/user-info'
import {useSelector, useDispatch} from 'react-redux'
import {styles} from './css'
import {userInfoUpdate} from '../../services'
import EditProfileHeader from './header'

function EditProfileScreen({navigation}) {
    const {userToken, userFirstName, userLastName, userPassword} = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    
    const [status, setStatus] = React.useState("")


    return (
        <View style={styles.background}>
            <EditProfileHeader navigation={navigation}/>

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
                        <TouchableOpacity style={styles.button_edit} onPress={async ()=> setStatus(await userInfoUpdate(userFirstName, userLastName, userPassword, userToken))}>
                            <Text style={styles.text_edit}>UPDATE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

    </View>
    )
}



export default EditProfileScreen;