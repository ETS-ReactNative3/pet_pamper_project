import React from 'react';
import { Pressable, View, StyleSheet, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

function SignupButton(props) {
    return (
        <View style={styles.buttonArea}>
            <Pressable style={styles.button}>
                <Text style={styles.text}>SIGN UP</Text>
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({
    buttonArea: {
        borderWidth: 1,
        borderColor: '#518ef8',
        borderRadius: 7,
        width: '80%',
        height: 50,
        textTransform: 'capitalize',
        marginTop: 20
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
        fontSize: 17,
        color: '#80f7e3',
        fontWeight: 'bold',
    },

})

export default SignupButton;