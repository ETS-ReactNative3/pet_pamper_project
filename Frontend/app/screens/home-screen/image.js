import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native'
import { Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'
import {styles} from './css'
import {useSelector} from 'react-redux'
import {imageUri} from '../../methods'

export default function HomeImage() {
    return (        
        <Image style={styles.image} source={require('../../assets/Pet_Pamper_signIn.png')}/>       
    );
}



