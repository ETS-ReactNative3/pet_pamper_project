import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

function NavigationBar(props) {
    return (
        <View style={styles.nav_bar}>
            <View style={styles.icon_area}>

                <TouchableOpacity style={{flex: 1}}>
                    <Icon style={styles.icon_discover} color= "#80f7e3" size={30} name="group"/>
                    <Text style= {{color:'#80f7e3'}}>Discover</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{flex: 1.1}}>
                    <Icon  style={styles.icon_vet} color= "#80f7e3" size={30} name="medkit"/>
                    <Text style= {{color:'#80f7e3'}}>Veterinary</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{flex: 1.02}}>
                    <Icon style={styles.icon_shop} color= "#80f7e3" size={30} name="paw"/>
                    <Text style= {{color:'#80f7e3'}}>Pet Shop</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{flex: 1.}}>
                    <Icon style={styles.icon_profile} color= "#80f7e3" size={30} name="user-circle-o"/>
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

    icon_area: {
        flexDirection:'row',
        flex:1,
        marginLeft: 35,
        marginTop: 8
    },

    icon_discover: {
        marginLeft: 12
    },

    icon_vet: {
        marginLeft: 16
    },

    icon_shop: {
        marginLeft: 12,
    },

    icon_profile: {
        marginLeft: 2
    }
})
export default NavigationBar;