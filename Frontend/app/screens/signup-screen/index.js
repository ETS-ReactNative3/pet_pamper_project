import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Platform, StatusBar } from 'react-native';
import GoogleSigninButton from '../../components/googleSigninButton'
import SigninButton from '../../components/signinButton'
import TextInputs from '../../components/textInput';

function SignupScreen(props) {
    return (
        <View style= {styles.backgroudArea}>
            <Image style={styles.image} source={require("../../assets/Pet_Pamper_signIn.png")}/>

            <View style= {styles.googleButton}>
                <GoogleSigninButton/>
                <View style={styles.line}/>
                <Text style= {styles.orText}>or</Text>
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
        flex:1,
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
        top: 120,
        fontSize: 19,
        zIndex: 1,
        backgroundColor: 'white',
        padding: 5
    },

    signup: {
        marginTop: 20
    }
})

export default SignupScreen;