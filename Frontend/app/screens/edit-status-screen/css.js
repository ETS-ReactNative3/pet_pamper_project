import { StyleSheet } from "react-native"
import {color} from '../../constants'

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
        color: color.primary,
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
        color: color.primary,
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

    status_input: {
        width: '80%',
        height: 100,
        marginTop: 10 ,
        textTransform: 'lowercase',
        textAlignVertical: 'top'
        
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
        backgroundColor: color.primary,
        width: '100%',
        alignItems: 'center',   
    },

    text_edit: {
        fontSize: 17,
        color: color.secondary,
        fontWeight: 'bold',
    },
})