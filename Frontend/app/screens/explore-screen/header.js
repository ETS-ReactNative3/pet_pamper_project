import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native'
import { Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'
import {styles} from './css'
import {useSelector} from 'react-redux'
import {imageUri} from '../../methods'

export default function ExploreHeader({navigation}) {
    const {userImage} = useSelector(state => state.userReducer)
    return (
        <View style={styles.header_area}>
            <View style={styles.header}>              
                <View style={styles.header_image_area}>
                    <Image style={styles.header_image} source={{uri: imageUri(userImage)}}></Image>
                </View>

                <View style={styles.header_text_area}>
                    <Text style={styles.header_text}>Discover</Text>
                    <Icon style={styles.header_icon_arrow} size={20} name="chevron-down"/>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                    <Avatar.Icon style={styles.header_icon} size={40} icon="bell" />
                </TouchableOpacity>
            </View>

            <Text style={styles.header_sub_title}>Your communities</Text>
        </View>
    );
}



