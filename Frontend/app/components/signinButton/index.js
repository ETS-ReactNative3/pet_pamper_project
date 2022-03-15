import React from 'react';
import { Pressable, View, StyleSheet, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

function SigninButton(props) {
    return (
        <View style={styles.buttonArea}>
            <Pressable style={styles.button}>
                <Text style={styles.text}>Sign in with your Email</Text>
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

export default SigninButton;