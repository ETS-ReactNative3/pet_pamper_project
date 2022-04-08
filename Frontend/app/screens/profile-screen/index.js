import React from 'react';
import {View} from 'react-native'
import {styles} from './css'
import ProfileImage from './profile-image'
import ProfileInfo from './profile-info'
import ProfileOptions from './profile-options';

export default function ProfileScreen({navigation}) {
    return (
        <View style={styles.background}>
            <ProfileImage/>
            <ProfileInfo/>
            <ProfileOptions navigation={navigation}/>        
        </View>
    );
}
