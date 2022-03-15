import React from 'react';
import { Pressable, View, StyleSheet, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

function GoogleSigninButton(props) {
    return (
        <View style={styles.buttonArea}>
            <Pressable style={styles.button}>
                <View style={styles.googleIconArea}>
                    <Image style={styles.googleIcon} source={require('../../assets/Google-icon.png')}></Image>
                </View>
                <Text style={styles.text}>Sign in with Google</Text>
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({
    buttonArea: {
        borderWidth: 1,
        borderColor: '#518ef8',
        borderRadius: 7,
        width: '90%',
        height: 60,
        textTransform: 'capitalize',
        marginTop: 50,
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
        fontSize: 19,
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
    }
})

export default GoogleSigninButton;