import React from 'react';
import {ScrollView, View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const fc_items = [
    {
        image: require('../../assets/Pet_Pamper_signIn.png'),
        text: "Community 1"
    },

    {
        image: require('../../assets/Pet_Pamper_signIn.png'),
        text: "Community 2"
    },

    {
        image: require('../../assets/Pet_Pamper_signIn.png'),
        text: "Community 3"
    },

    {
        image: require('../../assets/Pet_Pamper_signIn.png'),
        text: "Community 4"
    },

    {
        image: require('../../assets/Pet_Pamper_signIn.png'),
        text: "Community 5"
    },

    {
        image: require('../../assets/Pet_Pamper_signIn.png'),
        text: "Community 6"
    },

    
];

function FollowedCommunties(props) {
    return (
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {fc_items.map((fc_item, fc_index) => (
                    <View key= {fc_index} >
                        <TouchableOpacity>
                            <Image style= {styles.fc_image} source= {fc_item.image}/>

                            <Text style= {styles.fc_text}>{fc_item.text}</Text>
                            <View style={styles.fc_button_area}>
                                <View style={styles.fc_button}>
                                    <Text style={styles.fc_button_text}>PING</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))}         
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    fc_image: {
        width: 100,
        height: 100,
        borderRadius: 100,
        opacity: 0.6,
        borderColor: '#004b67',
        borderWidth: 3,
        marginTop: 10,
        marginLeft: 10,
    },

    fc_text: {
        marginLeft: 17,
        marginTop: 5,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#004b67'
    },

    fc_button_area: {
        paddingHorizontal: 20
    },
    
    fc_button: {
        backgroundColor: '#004b67',
        borderRadius: 5,
        alignItems: 'center',
        position: 'relative',
        zIndex: 2,
        top: -86,
        left: 5,
        paddingVertical: 3
    },

    fc_button_text: {
        color: 'white'
    },

})
export default FollowedCommunties;