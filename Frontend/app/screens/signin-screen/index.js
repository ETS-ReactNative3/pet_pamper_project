import React from 'react';
import {View} from 'react-native';
import {styles} from './css'
import InputForm from './input-form';

export default function SigninScreen({navigation}) {
    return (
        <View style= {styles.backgroudArea}>
            <InputForm navigation={navigation}/>
        </View>  
    );
}
