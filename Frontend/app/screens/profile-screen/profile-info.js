import React from 'react';
import {View, Text} from 'react-native'
import {useSelector} from 'react-redux'
import {styles} from './css'


export default function ProfileInfo() {
    const {userFirstName, userLastName, userStatus} = useSelector(state => state.userReducer)
    
    return (
            <View>
                <Text style= {styles.user_name}>{userFirstName} {userLastName}</Text>
                <Text style= {styles.user_status}>{userStatus}</Text>
            </View>

    );
}

