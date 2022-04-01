import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Avatar, TextInput } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import {useSelector, useDispatch} from 'react-redux'
import * as Location from 'expo-location';
import {setUserToken, setUserId, setUserCommunities, setUserLastName, setUserFirstName, setUserLatitude, setUserLongitude, setUserImage, setUserStatus, setUserPassword} from '../../redux/actions/user-info'
import {styles} from './css'
import SigninButton from '../../components/signinButton';
import {registerPushToken} from '../../services'

function SignupScreen({navigation}) {
    const dispatch = useDispatch()
    const [first_name, onChangeFirstName] = React.useState("");
    const [last_name, onChangeLastName] = React.useState("");
    const [email, onChangeEmail] = React.useState("");
    const [phone_number, onChangePhoneNumber] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [account_type, setAccountType] = React.useState("");
    const [latitude, setLatitude] = React.useState("");
    const [longitude, setLongitude] = React.useState("");
    const [status, setStatus] = React.useState("")
    const url_signup = 'http://192.168.1.107:3000/user/signup'
    const url_signin = 'http://192.168.1.107:3000/user/signin'


    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLatitude(location.coords.latitude);
          setLongitude(location.coords.longitude);
          
        })();
      }, []);

    useEffect(()=> {
        if (status == 'Successful sign up!') {
            return signin()
        }else if (status == "Successful login!") {
            navigation.navigate('Explore')
        }
      }, [status])
    
    async function signup() {
        let push_token = await registerPushToken()
        let result = await fetch(url_signup, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
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
        
        setStatus(result.message)
        
    }

    async function signin() {
 
        let result = await fetch(url_signin, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
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
                    <Picker.Item label="Pet Walker" value="Pet Walker" />
                    <Picker.Item label="Veterinary" value="Veterinary" />
                    <Picker.Item label="Pet Shop" value="Pet Shop" />
                </Picker>

                <View  style={styles.button_area_signup}>
                    <TouchableOpacity style={styles.button_signup} onPress={()=> signup()}>
                        <Text style={styles.text_signup}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.line}/>
                <Text style= {styles.orText}>or</Text>

                <View style={styles.buttonArea}>
                    <TouchableOpacity onPress={() => alert('Hello, world!')} style={styles.button}>
                        <View style={styles.googleIconArea}>
                            <Image style={styles.googleIcon} source={require('../../assets/Google-icon.png')}></Image>
                        </View>
                        <Text style={styles.text}>Sign up with Google</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>  
    );
}

export default SignupScreen;