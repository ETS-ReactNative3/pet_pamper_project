import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import { Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'
import {styles} from './css'

export default function EditProfileHeader({navigation}) {
    return (
        <View style={styles.header_area}>
            <View style={styles.header}>              
                <TouchableOpacity onPress={()=> navigation.navigate('Profile Screen')}>
                    <Avatar.Icon style={styles.header_icon} color='black' size={60} icon="chevron-left" />
                </TouchableOpacity>

                <View style={styles.header_text_area}>
                    <Text style={styles.header_text}>Edit Profile</Text>
                    <Icon style={styles.header_icon_arrow} size={20} name="chevron-down"/>
                </View>

                <TouchableOpacity onPress={()=>navigation.navigate('Notifications')}>
                    <Avatar.Icon style={styles.header_icon} size={40} icon="bell" />
                </TouchableOpacity>
            </View>

            <Text style={styles.header_sub_title}></Text>
        </View>
    );
}



