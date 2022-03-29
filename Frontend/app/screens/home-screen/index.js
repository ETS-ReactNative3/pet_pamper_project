import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Platform, StatusBar, TouchableOpacity } from 'react-native';
import GoogleSigninButton from '../../components/googleSigninButton'
import SigninButton from '../../components/signinButton'
import TextInputs from '../../components/textInput';
import {styles} from './css'

function HomeScreen({ navigation }) {
    
    return (
        <View style= {styles.backgroudArea}>
            <Image style={styles.image} source={require('../../assets/Pet_Pamper_signIn.png')}/>

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





export default HomeScreen;