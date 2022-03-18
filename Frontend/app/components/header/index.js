import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { Avatar, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'

function Header(props) {
    return (
        <View style={styles.header_area}>
            <View style={styles.header}>              
                <View style={styles.image_area}>
                    <Image style={styles.image} source={require('../../assets/Pet_Pamper_signIn.png')}></Image>
                </View>

                <View style={styles.text_area}>
                    <Text style={styles.text}>{props.title}</Text>
                    <Icon style={styles.icon_arrow} size={20} name="chevron-down"/>
                </View>

                <TouchableOpacity>
                    <Avatar.Icon style={styles.icon} size={40} icon="bell" />
                </TouchableOpacity>
            </View>

            <Text style= {styles.sub_title}>{props.sub_title}</Text>
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

    text_area: {
        flex:3,
        paddingLeft: 90,
        paddingTop: 10
        
    },

    text: {
        fontSize: 17,
        color: '#004b67',
        fontWeight: 'bold',
    },

    image_area: {
        marginLeft: 2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },

    image: {
        width: '70%',
        height: '70%',
        resizeMode: 'contain',
        borderRadius: 200
    },

    icon: {
        flex:1,
        backgroundColor: 'white',
        color: '#eee',
    },

    icon_arrow: {
        color: '#004b67',
        marginLeft: 24,
        marginTop: 0
    },

    sub_title:{
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 10,
        marginLeft: 15,
        color: '#004b67'
    }
})
export default Header;

