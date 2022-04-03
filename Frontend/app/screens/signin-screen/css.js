import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    backgroudArea: {
        flex:1,
        backgroundColor: "white",
        alignItems: 'center',
        
    },

    signin_form: {
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

    email_input: {
        width: '80%',
        height: 45,
        marginTop: 10 ,
        textTransform: 'lowercase'
    },
  
    password_input: {
        width: '80%',
        height: 45,
        marginTop: 10 
    },

    button_area_signin: {
        borderWidth: 1,
        borderColor: '#518ef8',
        borderRadius: 7,
        width: '80%',
        height: 50,
        textTransform: 'capitalize',
        marginTop: 20
    },
    
    button_signin: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: '#004b67',
        width: '100%',
        alignItems: 'center',   
    },

    text_signin: {
        fontSize: 17,
        color: '#80f7e3',
        fontWeight: 'bold',
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

})