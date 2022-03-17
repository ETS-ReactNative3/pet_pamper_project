import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Platform, StatusBar, TouchableOpacity } from 'react-native';
import GoogleSigninButton from '../../components/googleSigninButton'
import SigninButton from '../../components/signinButton'
import TextInputs from '../../components/textInput';

function HomeScreen({ navigation }) {
    return (
        <View style= {styles.backgroudArea}>
            <Image style={styles.image} source={require("../../assets/Pet_Pamper_signIn.png")}/>

            <View style= {styles.googleButton}>
                <View style={styles.button_area_signin}>
                    <TouchableOpacity onPress={() => alert('Hello, world!')} style={styles.button_signin}>
                        <View style={styles.googleIconArea}>
                            <Image style={styles.googleIcon} source={require('../../assets/Google-icon.png')}></Image>
                        </View>

                        <Text style={styles.text_signin}>Sign in with Google</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.line}/>

                <Text style= {styles.orText}>or</Text>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={() =>
                navigation.navigate('Sign In')}>
                        <Text style={styles.text}>Sign in with your Email</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.signup}>Don't have an account? <Text style={{fontWeight: 'bold'}} onPress={() =>
                navigation.navigate('Sign Up')}>Sign up</Text></Text>  
            </View>        
        </View>  
    );
}



const styles = StyleSheet.create({
    backgroudArea: {
        flex:1,
        backgroundColor: "#004b67",
    },
    
    image: {
        flex:1.3,
        height: '100%',
        width: '100%',
        resizeMode:"stretch"
    },
    
    googleButton: {
        flex:1,
        backgroundColor: 'white',
        borderWidth: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center'
    },

    line: {
        backgroundColor: '#004b67',
        width: '90%',
        marginTop: 20,
        height: 1
    },

    orText: {
        position: 'absolute',
        top: 105,
        fontSize: 19,
        zIndex: 1,
        backgroundColor: 'white',
        padding: 5
    },

    signup: {
        marginTop: 20
    },

    button_area_signin: {
        borderWidth: 1,
        borderColor: '#518ef8',
        borderRadius: 7,
        width: '90%',
        height: 55,
        textTransform: 'capitalize',
        marginTop: 40,
        marginBottom: 10
    },
    
    button_signin: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: '#518ef8',
        width: '100%',
        alignItems: 'center',   
    },

    text_signin: {
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

    buttonArea: {
        borderWidth: 1,
        borderColor: '#518ef8',
        borderRadius: 7,
        width: '90%',
        height: 55,
        textTransform: 'capitalize',
        marginTop: 30
    },
    
    button: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: '#004b67',
        width: '100%',
        alignItems: 'center',   
    },

    text: {
        paddingLeft: 15,
        fontSize: 17,
        color: '#80f7e3',
        fontWeight: 'bold',
    },
})

export default HomeScreen;