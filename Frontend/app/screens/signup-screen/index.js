import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Avatar, TextInput } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';

function SignupScreen({navigation}) {
    const [first_name, onChangeFirstName] = React.useState("");
    const [last_name, onChangeLastName] = React.useState("");
    const [email, onChangeEmail] = React.useState("");
    const [phone_number, onChangePhoneNumber] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [account_type, setAccountType] = React.useState("");
    const [status, setStatus] = React.useState("")
    const url = 'http://192.168.1.107:3000/user/signup'

    useEffect(()=> {
        if (status == 'Successful sign up!') {
            navigation.navigate('Home')
        }
      }, [status])
    
    async function signup() {
 
        let result = await fetch(url, {
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
                account_type: account_type
            })
        })

        result = await result.json()
        
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



const styles = StyleSheet.create({
    backgroudArea: {
        flex:1,
        backgroundColor: "white",
        alignItems: 'center',
        
    },

    signup_form: {
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

    name: {   
        flexDirection: 'row',
        width: '80%',
        marginTop: 10,
        height: 50,
    },

    first_name:{
        flexBasis: '48%',
        marginRight: 5,
    },
    
    last_name:{
        flexBasis: '48%', 
        marginLeft: 5,
    },

    email_input: {
        width: '80%',
        height: 45,
        marginTop: 10 
    },
  
    phone_number_input: {
        width: '80%',
        height: 45,
        marginTop: 10 
    },
  
    password_input: {
        width: '80%',
        height: 45,
        marginTop: 10 
    },

    picker: {
        width: '80%',
        height: 50,
        borderWidth: 1,
        borderColor: 'black'
    },

    button_area_signup: {
        borderWidth: 1,
        borderColor: '#518ef8',
        borderRadius: 7,
        width: '80%',
        height: 50,
        textTransform: 'capitalize',
        marginTop: 20
    },
    
    button_signup: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: '#004b67',
        width: '100%',
        alignItems: 'center',   
    },

    text_signup: {
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
        top: 473,
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

export default SignupScreen;