import React from 'react';
import {ScrollView, View, Text, Image, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native';

const nc_items = [
    {
        image: require('../../assets/Pet_Pamper_signIn.png'),
        text: "Community 7",
        members: "256 members"
    },

    {
        image: require('../../assets/Pet_Pamper_signIn.png'),
        text: "Community 8",
        members: "72 members"
    },

    {
        image: require('../../assets/Pet_Pamper_signIn.png'),
        text: "Community 9",
        members: "15 members"
    },

    {
        image: require('../../assets/Pet_Pamper_signIn.png'),
        text: "Community 10",
        members: "10 members"
    },

    {
        image: require('../../assets/Pet_Pamper_signIn.png'),
        text: "Community 11",
        members: "4 members"
    },
];

function NearbyCommunities(props) {
    return (
            <View>
                <ScrollView >
                    {nc_items.map((nc_item, nc_index) => (
                        <View key= {nc_index}>
                            <View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <View>
                                        <Image style= {styles.nc_image} source= {nc_item.image}/>
                                    </View>
    
                                    <View style= {styles.nc_text}>
                                        <Text style= {styles.nc_text_title}>{nc_item.text}</Text>
                                        <Text style= {styles.nc_text_members}>{nc_item.members}</Text>
                                    </View>
    
                                    <View>    
                                        <TouchableOpacity style= {styles.nc_button}>
                                            <Text style={styles.nc_button_text}>JOIN</Text>
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
    nc_image: {
        flexBasis: '10%',
        width: 50,
        height: 50,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
        marginTop: 10,
        marginLeft: 10,
    },

    nc_text: {
        flexBasis: '60%',
        marginLeft: 17,
        marginTop: 5,
    },

    nc_text_title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#004b67'
    },

    nc_text_members: {
        fontSize: 12,
        color: '#545454'
    },

    nc_button: {
        backgroundColor: '#004b67',
        marginRight: 10,
        flexBasis: '20%',
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 5,
        
    },

    nc_button_text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14
    },
})
export default NearbyCommunities;