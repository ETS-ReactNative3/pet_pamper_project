import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

function NavigationBar({navigation}) {
    return (
        <View style={styles.nav_bar}>
            <View style={styles.nav_icon_area}>

                <TouchableOpacity style={{flex: 1}} onPress={() => navigation.navigate('Explore')}>
                    <Icon style={styles.nav_icon_discover} color= "#80f7e3" size={30} name="group"/>
                    <Text style= {{color:'#80f7e3'}}>Discover</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{flex: 1.1}} onPress={() => navigation.navigate('Veterinaries')}>
                    <Icon  style={styles.nav_icon_vet} color= "#80f7e3" size={30} name="medkit"/>
                    <Text style= {{color:'#80f7e3'}}>Veterinary</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{flex: 1.02}} onPress={() => navigation.navigate('Pet Shops')}>
                    <Icon style={styles.nav_icon_shop} color= "#80f7e3" size={30} name="paw"/>
                    <Text style= {{color:'#80f7e3'}}>Pet Shop</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{flex: 1.}}>
                    <Icon style={styles.nav_icon_profile} color= "#80f7e3" size={30} name="user-circle-o"/>
                    <Text style= {{color:'#80f7e3'}}>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    nav_bar:{
        position: 'absolute',
        top: 650,
        width: '100%',
        height: 60,
        backgroundColor: '#004b67'
    },

    nav_icon_area: {
        flexDirection:'row',
        flex:1,
        marginLeft: 35,
        marginTop: 8
    },

    nav_icon_discover: {
        marginLeft: 12
    },

    nav_icon_vet: {
        marginLeft: 17
    },

    nav_icon_shop: {
        marginLeft: 13,
    },

    nav_icon_profile: {
        marginLeft: 5
    },
})
export default NavigationBar;