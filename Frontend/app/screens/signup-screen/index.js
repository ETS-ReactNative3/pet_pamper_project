import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Avatar, TextInput } from 'react-native-paper';


function SignupScreen(props) {
    const [first_name, onChangeFirstName] = React.useState("");
    const [last_name, onChangeLastName] = React.useState("");
    const [email, onChangeEmail] = React.useState("");
    const [phone_number, onChangePhoneNumber] = React.useState("");
    const [password, onChangePassword] = React.useState("");

    return (
        <View style= {styles.backgroudArea}>
            <View style={styles.signup_form}>
                <Avatar.Icon style={styles.icon} size={50} icon="lock" />
                <Text style= {styles.text}>Sign Up</Text>

                <View style= {styles.name}>
                    <TextInput
                    style={styles.first_name}
                    mode="outlined"
                    label="First Name"
                    onChangeText={onChangeFirstName}
                    value={first_name}
                                  
                    />

                    <TextInput
                        style={styles.last_name}
                        mode="outlined"
                        label="Last Name" 
                        onChangeText={onChangeLastName}
                        value={last_name}                      
                    />
                </View>

                <TextInput
                    style= {styles.email_input}
                    mode="outlined"
                    label="Email"
                    placeholder="Enter Email"
                    onChangeText={onChangeEmail}
                    value={email}
                />

                <TextInput
                    style= {styles.phone_number_input}
                    mode="outlined"
                    label="Phone Number"
                    placeholder="Enter Phone Number"
                    onChangeText={onChangePhoneNumber}
                    value={phone_number}
                />

                <TextInput
                    style= {styles.password_input}
                    label="Password"
                    mode="outlined"
                    secureTextEntry= {true}
                    onChangeText= {onChangePassword}
                    value={password}
                    placeholder="Enter Password"
                />



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
        marginTop: '10%',
        width: '100%'
    },

    icon: {
        backgroundColor: '#004b67'
    },
    
    text: {
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



})

export default SignupScreen;