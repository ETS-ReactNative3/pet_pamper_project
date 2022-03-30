import React from 'react';
import {View} from 'react-native'
import {styles} from './css'
import PetShopsHeader from './header';
import PetShops from './pet-shops';


function PetShopsScreen({navigation}) {
    return (
        <View style={styles.background}>
            <PetShopsHeader navigation={navigation}/>
            <PetShops/>
        </View>
    );
}





export default PetShopsScreen;