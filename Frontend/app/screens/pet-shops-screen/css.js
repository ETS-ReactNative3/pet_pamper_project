import {StyleSheet, Dimensions} from 'react-native'

export const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        flex: 1
    },

    header_area: {
        borderColor: 'white',
        width: '100%',
        height: 65,
    },

    header_image_nav: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        borderRadius: 200,
        alignItems: 'center',
        justifyContent: 'center'
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
        paddingLeft: 90,
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
        color: '#eee',
    },

    header_icon_arrow: {
        color: '#004b67',
        marginLeft: 24,
        marginTop: 0
    },

    header_sub_title:{
        fontWeight: 'bold',
        fontSize: 19,
        marginTop: 10,
        marginLeft: 15,
        color: 'black',
        marginBottom: 10
    },

    nps_image: {
        flexBasis: '10%',
        width: 50,
        height: 50,
        borderRadius: 10,
        borderColor: '#004b67',
        borderWidth: 2,
        marginTop: 10,
        marginLeft: 10,
    },

    nps_text: {
        flexBasis: '55%',
        marginLeft: 17,
        marginTop: 5,
    },

    nps_text_title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#004b67'
    },

    nps_text_location: {
        fontSize: 12,
        color: '#545454'
    },

    nps_button: {
        backgroundColor: '#004b67',
        marginRight: 10,
        flexBasis: '30%',
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 5,
        
    },

    nps_button_text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14
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

    container: {
        flex: 1,
      },
    
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },

    list_controller: {
        height: 35,
        marginTop: 10
    },

})