import React from 'react';
import {ScrollView, View, Text, Image, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native';

const nv_items = [
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
            <View>
                <ScrollView>
                    {nv_items.map((nv_item, nv_index) => (
                        <View key= {nv_index}>
                            <View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <View>
                                        <Image style= {styles.nv_image} source= {nv_item.image}/>
                                    </View>

                                    <View style= {styles.nv_text}>
                                        <Text style= {styles.nv_text_title}>{nv_item.text}</Text>
                                        <Text style= {styles.nv_text_location}>{nv_item.location}</Text>
                                    </View>

                                    <View>    
                                        <TouchableOpacity style= {styles.nv_button}>
                                            <Text style={styles.nv_button_text}>LOCATE</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))}
                
                </ScrollView>
            </View>
            
       
    );
}

const styles = StyleSheet.create({
    nv_image: {
        flexBasis: '10%',
        width: 50,
        height: 50,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
        marginTop: 10,
        marginLeft: 10,
    },

    nv_text: {
        flexBasis: '55%',
        marginLeft: 17,
        marginTop: 5,
    },

    nv_text_title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#004b67'
    },

    nv_text_location: {
        fontSize: 12,
        color: '#545454'
    },

    nv_button: {
        backgroundColor: '#004b67',
        marginRight: 10,
        flexBasis: '30%',
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 5,
        
    },

    nv_button_text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14
    },
})

export default NearbyVeterinaries;