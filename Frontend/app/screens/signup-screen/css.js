import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    backgroudArea: {
        flex:1,
        backgroundColor: "white",
        alignItems: 'center',
        
    },

    signup_form: {
        flex:1,
        backgroundColor: "white",
        alignItems: 'center',
        marginTop: '5%',
        width: '100%'
    },

    icon: {
        backgroundColor: '#004b67'
    },
    
    text_header: {
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

    picker: {
        width: '80%',
        height: 50,
        borderWidth: 1,
        borderColor: 'black'
    },

    button_area_signup: {
        borderWidth: 1,
        borderColor: '#518ef8',
        borderRadius: 7,
        width: '80%',
        height: 50,
        textTransform: 'capitalize',
        marginTop: 20
    },
    
    button_signup: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: '#004b67',
        width: '100%',
        alignItems: 'center',   
    },

    text_signup: {
        fontSize: 17,
        color: '#80f7e3',
        fontWeight: 'bold',
    },

    line: {
        backgroundColor: '#004b67',
        width: '80%',
        marginTop: 25,
        height: 1
    },

    orText: {
        position: 'absolute',
        top: 473,
        fontSize: 19,
        zIndex: 1,
        backgroundColor: 'white',
        padding: 5
    },

    buttonArea: {
        borderWidth: 1,
        borderColor: '#518ef8',
        borderRadius: 7,
        width: '80%',
        height: 50,
        marginTop: 30,
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