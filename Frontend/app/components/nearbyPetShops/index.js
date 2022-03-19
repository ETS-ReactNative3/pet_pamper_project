import React from 'react';
import {ScrollView, View, Text, Image, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native';

const nps_items = [
    {
        image: require('../../assets/Pet_Pamper_signIn.png'),
        text: "Pet Shop 1",
        location: "Hamra"
    },

    {
        image: require('../../assets/Pet_Pamper_signIn.png'),
        text: "Pet Shop 2",
        location: "Bliss"
    },

    {
        image: require('../../assets/Pet_Pamper_signIn.png'),
        text: "Pet Shop 3",
        location: "Verdun"
    },

    {
        image: require('../../assets/Pet_Pamper_signIn.png'),
        text: "Pet Shop 4",
        location: "Kraytem"
    },

    {
        image: require('../../assets/Pet_Pamper_signIn.png'),
        text: "Pet Shop 5",
        location: "Rawshe"    },
];

function NearbyPetShops(props) {
    return (
            <View>
                <ScrollView vertical>
                    {nps_items.map((nps_item, nps_index) => (
                        <View key= {nps_index}>
                            <View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <View>
                                        <Image style= {styles.nps_image} source= {nps_item.image}/>
                                    </View>

                                    <View style= {styles.nps_text}>
                                        <Text style= {styles.nps_text_title}>{nps_item.text}</Text>
                                        <Text style= {styles.nps_text_location}>{nps_item.location}</Text>
                                    </View>

                                    <View>    
                                        <TouchableOpacity style= {styles.nps_button}>
                                            <Text style={styles.nps_button_text}>LOCATE</Text>
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
    nps_image: {
        flexBasis: '10%',
        width: 50,
        height: 50,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
        marginTop: 10,
        marginLeft: 10,
    },

    nps_text: {
        flexBasis: '55%',
        marginLeft: 17,
        marginTop: 5,
    },

    nps_text_title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#004b67'
    },

    nps_text_location: {
        fontSize: 12,
        color: '#545454'
    },

    nps_button: {
        backgroundColor: '#004b67',
        marginRight: 10,
        flexBasis: '30%',
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 5,
        
    },

    nps_button_text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14
    },
})

export default NearbyPetShops;