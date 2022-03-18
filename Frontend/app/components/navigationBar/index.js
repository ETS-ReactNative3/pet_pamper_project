import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

function NavigationBar(props) {
    return (
        <View style={styles.nav_bar}>
            <View style={styles.icon_area}>

                <TouchableOpacity style={{flex: 1}}>
                    <Icon  color= "#80f7e3" size={40} name="group"/>
                </TouchableOpacity>

                <TouchableOpacity style={{flex: 1}}>
                    <Icon  color= "#80f7e3" size={40} name="medkit"/>
                </TouchableOpacity>

                <TouchableOpacity style={{flex: 1}}>
                    <Icon  color= "#80f7e3" size={40} name="paw"/>
                </TouchableOpacity>

                <TouchableOpacity style={{flex: 1}}>
                    <Icon  color= "#80f7e3" size={40} name="user-circle-o"/>
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
        marginLeft: 37,
        marginTop: 10
    }
})
export default NavigationBar;