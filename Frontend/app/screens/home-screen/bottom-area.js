import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {styles} from './css'

export default function BottomArea({ navigation }) {
    return (
        <View style= {styles.backgroudArea}>

            <View style= {styles.bottomArea}>
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
