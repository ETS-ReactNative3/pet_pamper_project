import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Avatar, TextInput } from 'react-native-paper';
import * as Location from 'expo-location';
import {useSelector, useDispatch} from 'react-redux'
import {setUserToken, setUserPushToken, setUserId, setUserCommunities, setUserLastName, setUserFirstName, setUserLatitude, setUserLongitude, setUserImage, setUserStatus, setUserPassword} from '../../redux/actions/user-info'
import {styles} from './css'
import {userSignIn} from '../../services'

export default function InputForm({navigation}) {
    const dispatch = useDispatch()
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [latitude, setLatitude] = React.useState("");
    const [longitude, setLongitude] = React.useState("");
    const [status, setStatus] = React.useState("")
    
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
        if (status == "Successful login!") {
            navigation.navigate('Explore')
        }
      }, [status])



    async function signin(email, password, latitude, longitude) {
        let result = await userSignIn(email, password, latitude, longitude)

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
        setStatus(result.message)     
    }
    
    return (
        <View style= {styles.backgroudArea}>

            <View style={styles.signin_form}>
                <Avatar.Icon style={styles.icon} size={50} icon="lock" />

                <Text style= {styles.text_header}>Sign In</Text>

                <Text>{status}</Text>

                <TextInput
                    style= {styles.email_input}
                    mode="outlined"
                    label="Email"
                    placeholder="Enter Email"
                    onChangeText={newText => onChangeEmail(newText)}
                />

                <TextInput
                    style= {styles.password_input}
                    label="Password"
                    mode="outlined"
                    secureTextEntry= {true}
                    onChangeText= {newText => onChangePassword(newText)}
                    placeholder="Enter Password"
                />

                <View  style={styles.button_area_signin}>
                    <TouchableOpacity style={styles.button_signin} onPress={()=> signin(email, password, latitude, longitude)}>
                        <Text style={styles.text_signin}>LOGIN</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.line}/>
                <Text style= {styles.orText}>or</Text>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button}>
                        <View style={styles.googleIconArea}>
                            <Image style={styles.googleIcon} source={require('../../assets/Google-icon.png')}></Image>
                        </View>
                        <Text style={styles.text}>Sign in with Google</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>  
    );
}
