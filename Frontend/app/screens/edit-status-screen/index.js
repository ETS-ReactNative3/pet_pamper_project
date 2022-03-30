// import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
// import { Avatar, TextInput } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/FontAwesome'
// import {setUserStatus} from '../../redux/actions/user-info'
// import {useSelector, useDispatch} from 'react-redux'
import {styles} from './css'
// import {userStatusUpdate} from '../../services'
import StatusHeader from './header';
import InputForm from './input-form';

function EditStatusScreen({navigation}) {
    // const {userToken, userStatus} = useSelector(state => state.userReducer)
    // const dispatch = useDispatch()  
    // const [status, setStatus] = React.useState("")

    return (
        <View style={styles.background}>
            <StatusHeader navigation={navigation}/>
            <InputForm/>
            {/* <View style= {styles.backgroudArea}>

                <View style={styles.edit_form}>

                    <Text>{status}</Text>

                    <TextInput
                        style= {styles.status_input}
                        mode="outlined"
                        label="Status"
                        placeholder="Enter Status"
                        multiline= {true}
                        value ={userStatus}
                        onChangeText={newText => dispatch(setUserStatus(newText))}
                    />
                    

                    <View  style={styles.button_area_edit}>
                        <TouchableOpacity style={styles.button_edit} onPress={async ()=> setStatus(await userStatusUpdate(userStatus, userToken))}>
                            <Text style={styles.text_edit}>UPDATE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View> */}

    </View>
    )
}



export default EditStatusScreen;