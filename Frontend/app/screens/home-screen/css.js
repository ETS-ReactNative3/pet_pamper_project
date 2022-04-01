import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    backgroudArea: {
        flex:1,
        backgroundColor: "#004b67",
    },
    
    image: {
        flex:2,
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
        marginTop: 50
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