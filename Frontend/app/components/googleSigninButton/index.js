import React from 'react';
import { Pressable, View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


function GoogleSigninButton(props) {
    return (
        <View style={styles.button_area_signin}>
            <TouchableOpacity onPress={() => alert('Hello, world!')} style={styles.button_signin}>
                <View style={styles.googleIconArea}>
                    <Image style={styles.googleIcon} source={require('../../assets/Google-icon.png')}></Image>
                </View>
                <Text style={styles.text_signin}>Sign in with Google</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
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
})

export default GoogleSigninButton;