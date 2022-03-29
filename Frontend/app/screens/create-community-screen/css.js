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
        paddingLeft: 50,
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
        marginLeft: 50,
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
  

    button_area_create: {
        borderWidth: 1,
        borderColor: '#518ef8',
        borderRadius: 7,
        width: '40%',
        height: 50,
        textTransform: 'capitalize',
        marginTop: 30
    },
    
    button_create: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: '#004b67',
        width: '100%',
        alignItems: 'center',   
    },

    text_create: {
        fontSize: 17,
        color: '#80f7e3',
        fontWeight: 'bold',
    },

    picked_image_area: {
        marginTop: 40, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },

    picked_image_button:{
        color: 'white',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: '#80f7e3',
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 10
    },

    picked_image_text:{
        color: 'black',
        fontWeight: 'bold',
    },

    picked_image:{
        borderWidth: 5,
        width:200,
        height: 200
    }

})