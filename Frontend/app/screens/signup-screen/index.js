import React, {useEffect} from 'react';
import {Text, View,TouchableOpacity} from 'react-native';
import { Avatar, TextInput } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import {useDispatch} from 'react-redux'
import {styles} from './css'

import {usercurrentLocation, userSignUp, userSignIn} from '../../services'

export default function SignupScreen({navigation}) {
    const dispatch = useDispatch()
    const [first_name, onChangeFirstName] = React.useState("");
    const [last_name, onChangeLastName] = React.useState("");
    const [email, onChangeEmail] = React.useState("");
    const [phone_number, onChangePhoneNumber] = React.useState("");
    const [latitude, setLatitude] = React.useState("");
    const [longitude, setLongitude] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [account_type, setAccountType] = React.useState("");
    const [status, setStatus] = React.useState("")

    useEffect(async () => {
        let location = await usercurrentLocation(dispatch)
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);  
    }, []);

    useEffect(()=> {
        if (status == 'Successful sign up!') {
            return signin(email, password, latitude, longitude, dispatch)
        }else if (status == "Successful login!") {
            navigation.navigate('Explore')
        }
      }, [status])


    async function signin(email, password, latitude, longitude,dispatch) {
        let result = await userSignIn(email, password, latitude, longitude, dispatch)
        setStatus(result.message)   
    }


    return (
        <View style= {styles.backgroudArea}>

            <View style={styles.signup_form}>
                <Avatar.Icon style={styles.icon} size={50} icon="lock" />

                <Text style= {styles.text_header}>Sign Up</Text>

                <Text>{status}</Text>

                <View style= {styles.name}>
                    <TextInput
                    style={styles.first_name}
                    mode="outlined"
                    label="First Name"
                    onChangeText={newText => onChangeFirstName(newText)}
                    value={first_name}                                 
                    />

                    <TextInput
                        style={styles.last_name}
                        mode="outlined"
                        label="Last Name" 
                        onChangeText={newText => onChangeLastName(newText)}
                        value={last_name}                      
                    />
                </View>

                <TextInput
                    style= {styles.email_input}
                    mode="outlined"
                    label="Email"
                    placeholder="Enter Email"
                    onChangeText={newText => onChangeEmail(newText)}
                />

                <TextInput
                    style= {styles.phone_number_input}
                    mode="outlined"
                    label="Phone Number"
                    placeholder="Enter Phone Number"
                    onChangeText={newText => onChangePhoneNumber(newText)}
                    value={phone_number}
                />

                <TextInput
                    style= {styles.password_input}
                    label="Password"
                    mode="outlined"
                    secureTextEntry= {true}
                    onChangeText= {newText => onChangePassword(newText)}
                    placeholder="Enter Password"
                />

                <Picker
                    selectedValue={account_type}
                        style={styles.picker}
                        onValueChange={(itemValue, itemIndex) => setAccountType(itemValue)}
                    >
                    <Picker.Item label="Pet Owner" value="Pet Walker" />
                    <Picker.Item label="Veterinary" value="Veterinary" />
                    <Picker.Item label="Pet Shop" value="Pet Shop" />
                </Picker>

                <View  style={styles.button_area_signup}>
                    <TouchableOpacity style={styles.button_signup} onPress={async ()=> {setStatus(await userSignUp(first_name, last_name, email, password, phone_number, account_type))}}>
                        <Text style={styles.text_signup}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>  
    );
}

