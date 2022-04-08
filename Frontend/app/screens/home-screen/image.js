import React from 'react';
import {Image} from 'react-native'
import {styles} from './css'


export default function HomeImage() {
    return (        
        <Image style={styles.image} source={require('../../assets/Pet_Pamper_signIn.png')}/>       
    );
}



