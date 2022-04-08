import { StyleSheet } from "react-native"
import {color} from '../../constants'

export const styles = StyleSheet.create({
    backgroudArea: {
        flex:1,
        backgroundColor: color.primary,
    },
    
    image: {
        flex:1.25,        
        height: '100%',
        width: '100%',
        resizeMode:"stretch"
    },
    
    bottomArea: {
        flex:1,
        backgroundColor: 'white',
        borderWidth: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
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
        backgroundColor: color.primary,
        width: '100%',
        alignItems: 'center',   
    },

    text: {
        paddingLeft: 15,
        fontSize: 17,
        color: color.secondary,
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

    line: {
        backgroundColor: color.primary,
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
        padding: 5,
        alignItems: 'center',
    },
})