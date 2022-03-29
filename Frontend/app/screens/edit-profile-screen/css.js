import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        flex: 1
    },

    header_area: {
        borderColor: 'white',
        width: '100%',
        height: 100,
    
    },
    
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '100%',
        alignItems: 'center',   
    },

    header_text_area: {
        flex:3,
        paddingLeft: 75,
        paddingTop: 10       
    },

    header_text: {
        fontSize: 17,
        color: '#004b67',
        fontWeight: 'bold',
    },

    header_image_area: {
        marginLeft: 2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },

    header_image: {
        width: '70%',
        height: '70%',
        resizeMode: 'contain',
        borderRadius: 200
    },

    header_icon: {
        flex:1,
        backgroundColor: 'white',

    },

    header_icon_arrow: {
        color: '#004b67',
        marginLeft: 24,
        marginTop: 0
    },

    header_sub_title:{
        backgroundColor: 'white',
        fontWeight: 'bold',
        fontSize: 19,
        color: 'black'
    },

    backgroudArea: {
        backgroundColor: "white",
        alignItems: 'center',
        
    },

    edit_form: {   
        backgroundColor: "white",
        alignItems: 'center',
        width: '100%'
    },

    name_input: {
        width: '80%',
        height: 45,
        marginTop: 10 ,
        textTransform: 'lowercase',
        
    },
  
    password_input: {
        width: '80%',
        height: 45,
        marginTop: 10 
    },

    button_area_edit: {
        borderWidth: 1,
        borderColor: '#518ef8',
        borderRadius: 7,
        width: '40%',
        height: 50,
        textTransform: 'capitalize',
        marginTop: 30
    },
    
    button_edit: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: '#004b67',
        width: '100%',
        alignItems: 'center',   
    },

    text_edit: {
        fontSize: 17,
        color: '#80f7e3',
        fontWeight: 'bold',
    },

    nav_bar:{
        position: 'absolute',
        top: 650,
        width: '100%',
        height: 60,
        backgroundColor: '#004b67'
    },

    nav_icon_area: {
        flexDirection:'row',
        flex:1,
        marginLeft: 35,
        marginTop: 8
    },

    nav_icon_discover: {
        marginLeft: 12
    },

    nav_icon_vet: {
        marginLeft: 17
    },

    nav_icon_shop: {
        marginLeft: 13,
    },

    nav_icon_profile: {
        marginLeft: 5
    },

})