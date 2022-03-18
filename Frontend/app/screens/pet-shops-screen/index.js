import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import Header from '../../components/header'
import NearbyPetShops from '../../components/nearbyPetShops'
import NavigationBar from '../../components/navigationBar'

function PetShopsScreen(props) {
    return (
        <View>
            <Header title={'Pet Shop'} sub_title={'Nearby pet shops'}/>
            <NearbyPetShops/>
            <NavigationBar/>
        </View>
    );
}

const styles = StyleSheet.create({
    sub_title:{
        fontWeight: 'bold',
        fontSize: 19,
        marginLeft: 15,
        color: 'black'
    }
})
export default PetShopsScreen;