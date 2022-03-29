import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        flex: 1
    },

    profile_image_area: {
        width: '100%',
        height: 200,
        alignItems: 'center',
    },

    profile_image: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },

    user_name: {
        marginTop: 20,
        fontSize: 35,
        fontWeight: 'bold',
        marginLeft: 20,
        color: '#004b67'
    },

    user_status: {
        marginTop: 10,
        fontSize: 15,
        marginLeft: 20,
        marginRight: 30,
        marginBottom: 30
    },

    edit_area: {
        borderColor: 'white',
        width: '100%',
        height: 50,
    },
    
    edit: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '100%',
        alignItems: 'center',   
    },

    edit_text_area: {
        flex:3,
        paddingLeft: 24,       
    },
    
    create_text_area: {
        flex:3,
        paddingLeft: 20,       
    },

    edit_text: {
        fontSize: 18,
        color: 'black',
    },

    edit_user_icon: {
        backgroundColor: 'white',
        marginLeft: 24
    },
    
    edit_image_icon: {
        position: 'absolute',
        left: 327,
        top: 5,
        zIndex: 1, 
    },

    create_user_icon: {
        backgroundColor: 'white',
        marginLeft: 20
    },
   
    edit_icon: {
        backgroundColor: 'white',
        marginRight: 20
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