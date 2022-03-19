import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { Avatar, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'

function Header(props) {
    return (
        <View style={styles.header_area}>
            <View style={styles.header}>              
                <View style={styles.header_image_area}>
                    <Image style={styles.header_image} source={require('../../assets/Pet_Pamper_signIn.png')}></Image>
                </View>

                <View style={styles.header_text_area}>
                    <Text style={styles.header_text}>Discover</Text>
                    <Icon style={styles.header_icon_arrow} size={20} name="chevron-down"/>
                </View>

                <TouchableOpacity>
                    <Avatar.Icon style={styles.header_icon} size={40} icon="bell" />
                </TouchableOpacity>
            </View>

            <Text style={styles.header_sub_title}>Your communities</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    header_area: {
        borderColor: 'white',
        width: '100%',
        height: 100,
        marginBottom: 10
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
        color: 'black'
    },
})
export default Header;

