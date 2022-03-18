import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import Header from '../../components/header'
import NearbyVeterinaries from '../../components/nearbyVeterinaries'
import NavigationBar from '../../components/navigationBar'

function VeterinariesScreen(props) {
    return (
        <View>
            <Header title={'Veterinary'} sub_title={'Nearby veterinaries'}/>
            <NearbyVeterinaries/>
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
export default VeterinariesScreen;