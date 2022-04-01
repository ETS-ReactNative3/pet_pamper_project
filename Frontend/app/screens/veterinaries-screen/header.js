import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native'
import { Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'
import {styles} from './css'
import {useSelector} from 'react-redux'
import {imageUri} from '../../methods'

export default function VeterinariesHeader({navigation}) {
    const {userImage} = useSelector(state => state.userReducer)
    return (
        <View style={styles.header_area}>
            <View style={styles.header}>              
                <View style={styles.header_image_area}>
                {userImage == undefined ? <Image style={styles.header_image} source={require('../../assets/avatar.png')}/> : <Image style={styles.header_image} source={{uri: imageUri(userImage)}}></Image>}
                </View>

                <View style={styles.header_text_area}>
                    <Text style={styles.header_text}>Veterinary</Text>
                    <Icon style={styles.header_icon_arrow} size={20} name="chevron-down"/>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                    <Avatar.Icon style={styles.header_icon} size={40} icon="bell" />
                </TouchableOpacity>
            </View>
        </View>
    );
}