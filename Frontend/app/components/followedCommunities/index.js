import React from 'react';
import {ScrollView, View, Text, Image, StyleSheet} from 'react-native';

const items = [
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
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {items.map((item,index) => (
                <View key= {index} style={{alignItems: 'center'}}>
                    <Image style= {styles.image} source= {item.image}/>
                    <Text style= {styles.text}>{item.text}</Text>
                </View>
            ))}
          
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        borderRadius: 100,
        opacity: 0.6,
        borderColor: 'red',
        borderWidth: 3,
        marginTop: 10,
        marginLeft: 10,
    },

    text: {
        marginLeft: 17,
        marginTop: 5,
        fontSize: 15,
        fontWeight: 'bold'
    }
})
export default FollowedCommunties;