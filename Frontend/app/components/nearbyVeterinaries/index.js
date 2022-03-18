import React from 'react';
import {ScrollView, View, Text, Image, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native';

const items = [
    {
        image: require('../../assets/Pet_Pamper_signIn.png'),
        text: "Veterinary 1",
        location: "Hamra"
    },

    {
        image: require('../../assets/Pet_Pamper_signIn.png'),
        text: "Veterinary 2",
        location: "Bliss"
    },

    {
        image: require('../../assets/Pet_Pamper_signIn.png'),
        text: "Veterinary 3",
        location: "Verdun"
    },

    {
        image: require('../../assets/Pet_Pamper_signIn.png'),
        text: "Veterinary 4",
        location: "Kraytem"
    },

    {
        image: require('../../assets/Pet_Pamper_signIn.png'),
        text: "Veterinary 5",
        location: "Rawshe"    },
];

function NearbyVeterinaries(props) {
    return (
            
            <ScrollView vertical>
                {items.map((item,index) => (
                    <View key= {index}>
                        <View>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <View>
                                    <Image style= {styles.image} source= {item.image}/>
                                </View>

                                <View style= {styles.text}>
                                    <Text style= {styles.text_title}>{item.text}</Text>
                                    <Text style= {styles.text_location}>{item.location}</Text>
                                </View>

                                <View>    
                                    <TouchableOpacity style= {styles.button}>
                                        <Text style={styles.button_text}>LOCATE</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                ))}
            
            </ScrollView>
            
       
    );
}

const styles = StyleSheet.create({
    image: {
        flexBasis: '10%',
        width: 50,
        height: 50,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
        marginTop: 10,
        marginLeft: 10,
    },

    text: {
        flexBasis: '55%',
        marginLeft: 17,
        marginTop: 5,
    },

    text_title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#004b67'
    },

    text_location: {
        fontSize: 12,
        color: '#545454'
    },

    button: {
        backgroundColor: '#004b67',
        marginRight: 10,
        flexBasis: '30%',
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 5,
        
    },

    button_text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14
    }
})

export default NearbyVeterinaries;