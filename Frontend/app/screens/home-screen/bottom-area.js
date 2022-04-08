import React, {useEffect} from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import {styles} from './css'
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import {useSelector, useDispatch} from 'react-redux'
import {userGoogleSignIn, usercurrentLocation} from '../../services'

WebBrowser.maybeCompleteAuthSession()

export default function BottomArea({ navigation }) {
    const [access_token , setAccessToken] = React.useState("");
    const [request, response, promptAsync] = Google.useAuthRequest({expoClientId: `909413013866-p2f7poj2lhvaot9ihk07d60nlantch4a.apps.googleusercontent.com`})
    const [user_info, setUserInfo] = React.useState("")
    const [latitude, setLatitude] = React.useState("");
    const [longitude, setLongitude] = React.useState("");
    const [status, setStatus] = React.useState("")
    const dispatch = useDispatch()

    React.useEffect(()=> {
        if (response?.type === 'success'){
            setAccessToken(response.authentication.accessToken)          
        }
    }, [response])

    const getUserData = async ()=> {
        let user_info_response = await fetch("https://www.googleapis.com/userinfo/v2/me",{
            header: {Authorization: `Bearer ${access_token}`}
            
        })
    
        user_info_response.json().then(data =>{
            setUserInfo(data.email)
        })
    }

    useEffect(async () => {
          let location = await usercurrentLocation()
          setLatitude(location.coords.latitude);
          setLongitude(location.coords.longitude);  
      }, []);

    useEffect(()=> {
        if (status == "Successful login!") {
            navigation.navigate('Explore')
        }
    }, [status])

    useEffect(async ()=> {
        let result = await userGoogleSignIn(user_info, latitude, longitude, dispatch)
        setStatus(result.message)
    }, [user_info])

    return (
        <View style= {styles.backgroudArea}>
            <View style= {styles.bottomArea}>

                <View style={styles.button_area_signin}>
                    <TouchableOpacity onPress={access_token ? getUserData : ()=> {promptAsync({showInRevents: true})}} style={styles.button_signin}>
                        <View style={styles.googleIconArea}>
                            <Image style={styles.googleIcon} source={require('../../assets/Google-icon.png')}></Image>
                        </View>

                        <Text style={styles.text_signin}>Sign in with Google</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.line}/>

                <Text style= {styles.orText}>or</Text>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sign In')}>
                        <Text style={styles.text}>Sign in with your Email</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.signup}>Don't have an account? <Text style={{fontWeight: 'bold'}} onPress={() => navigation.navigate('Sign Up')}>Sign up</Text></Text>  
            </View>        
        </View>  
    );
}
