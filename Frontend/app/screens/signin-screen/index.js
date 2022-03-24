import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Avatar, TextInput } from 'react-native-paper';
import * as Location from 'expo-location';
import {useSelector, useDispatch} from 'react-redux'
import {setUserToken, setUserCommunities, setUserLastName, setUserFirstName, setUserLatitude, setUserLongitude, setUserImage, setUserStatus, setUserPassword} from '../../redux/actions/user-info'

function SigninScreen({navigation}) {
    const {userToken, userCommunities, userFirstName, userLastName, userLatitude, userLongitude, userImage, userStatus} = useSelector(state => state.userReducer)
    const dispatch = useDispatch()

    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [latitude, setLatitude] = React.useState("");
    const [longitude, setLongitude] = React.useState("");
    const [status, setStatus] = React.useState("")
    // const [communities, setCommunities] = React.useState("")
    const url = 'http://192.168.1.107:3000/user/signin'
    // const url2 = 'http://192.168.1.107:3000/user/communities'

  

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

    //   useEffect(async ()=> {
    //     let results = await fetch(url2, {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         },
    //         body: JSON.stringify({
    //             communities: communities
    //         })
    //     })

    //     results = await results.json()
    //     console.log(results)

    //   },[communities])


    async function signin() {
 
        let result = await fetch(url, {
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
        
        setStatus(result.message)

 

        dispatch(setUserToken(result.token))
        dispatch(setUserCommunities(result.communities))
        dispatch(setUserFirstName(result.first_name))
        dispatch(setUserLastName(result.last_name))
        dispatch(setUserLatitude(result.latitude))
        dispatch(setUserLongitude(result.longitude))
        dispatch(setUserImage(result.image))
        dispatch(setUserStatus(result.status))
        dispatch(setUserPassword(result.password))

        
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
                    <TouchableOpacity style={styles.button_signin} onPress={()=> signin()}>
                        <Text style={styles.text_signin}>LOGIN</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.line}/>
                <Text style= {styles.orText}>or</Text>

                <View style={styles.buttonArea}>
                    <TouchableOpacity onPress={() => alert('Hello, world!')} style={styles.button}>
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



const styles = StyleSheet.create({
    backgroudArea: {
        flex:1,
        backgroundColor: "white",
        alignItems: 'center',
        
    },

    signin_form: {
        flex:1,
        backgroundColor: "white",
        alignItems: 'center',
        marginTop: '5%',
        width: '100%'
    },

    icon: {
        backgroundColor: '#004b67'
    },
    
    text_header: {
        fontWeight: 'bold',
        fontSize: 20
    },

    email_input: {
        width: '80%',
        height: 45,
        marginTop: 10 ,
        textTransform: 'lowercase'
    },
  
    password_input: {
        width: '80%',
        height: 45,
        marginTop: 10 
    },

    button_area_signin: {
        borderWidth: 1,
        borderColor: '#518ef8',
        borderRadius: 7,
        width: '80%',
        height: 50,
        textTransform: 'capitalize',
        marginTop: 20
    },
    
    button_signin: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: '#004b67',
        width: '100%',
        alignItems: 'center',   
    },

    text_signin: {
        fontSize: 17,
        color: '#80f7e3',
        fontWeight: 'bold',
    },

    line: {
        backgroundColor: '#004b67',
        width: '80%',
        marginTop: 25,
        height: 1
    },

    orText: {
        position: 'absolute',
        top: 297,
        fontSize: 19,
        zIndex: 1,
        backgroundColor: 'white',
        padding: 5
    },

    buttonArea: {
        borderWidth: 1,
        borderColor: '#518ef8',
        borderRadius: 7,
        width: '80%',
        height: 50,
        marginTop: 30,
        marginBottom: 10
    },
    
    button: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: '#518ef8',
        width: '100%',
        alignItems: 'center',   
    },

    text: {
        paddingLeft: 15,
        flexBasis: '80%',
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold',
    },

    googleIconArea: {
        marginLeft: 2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexBasis: '15%',
        width: '90%',
        height: '90%',
        backgroundColor: 'white',
        resizeMode: 'contain',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5
    },

    googleIcon: {
        justifyContent: 'center',
        width: '90%',
        height: '90%',
        resizeMode: 'contain',
    },

})

export default SigninScreen;