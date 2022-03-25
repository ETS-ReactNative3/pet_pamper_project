import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native'
import Header from '../../components/header'
import NearbyPetShops from '../../components/nearbyPetShops'
import NavigationBar from '../../components/navigationBar'
import { Avatar, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'
import {useSelector, useDispatch} from 'react-redux'
import {setUserNearbyPetShops} from '../../redux/actions/user-info'

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

function PetShopsScreen({navigation}) {
    const {userToken, userImage, userNearbyPetShops, userLatitude, userLongitude} = useSelector(state => state.userReducer)
    const dispatch= useDispatch()
    const url = 'http://192.168.1.107:3000/user/pet_shops'

    React.useEffect(async ()=> {
        let result = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({})
        })

        result = await result.json()
        console.log(userNearbyPetShops)
        const nearby_pet_shops = result.filter(value => Math.abs(value.latitude - userLatitude) <= 1 && + Math.abs(value.longitude - userLongitude) <= 1 )
        dispatch(setUserNearbyPetShops(nearby_pet_shops))
        
      }, []);

      const nps_items = userNearbyPetShops

    return (
        <View style={styles.background}>
            <View style={styles.header_area}>
                <View style={styles.header}>              
                    <View style={styles.header_image_area}>
                        <Image style={styles.header_image} source={{uri: `data:image/gif;base64,${userImage}`}}></Image>
                    </View>

                    <View style={styles.header_text_area}>
                        <Text style={styles.header_text}>Pet Shop</Text>
                        <Icon style={styles.header_icon_arrow} size={20} name="chevron-down"/>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                        <Avatar.Icon style={styles.header_icon} size={40} icon="bell" />
                    </TouchableOpacity>
                </View>

                <Text style={styles.header_sub_title}>Nearby pet shops</Text>
            </View>


            <View>
                <ScrollView vertical>
                    {nps_items.map((nps_item, nps_index) => (
                        <View key= {nps_index}>
                            <View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <View>
                                        <Image style= {styles.nps_image} source= {{uri: `data:image/gif;base64,${nps_item.image}`}}/>
                                    </View>

                                    <View style= {styles.nps_text}>
                                        <Text style= {styles.nps_text_title}>{nps_item.first_name}</Text>
                                        {/* <Text style= {styles.nps_text_location}>{nps_item.location}</Text> */}
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

                    <TouchableOpacity style={{flex: 1.}} onPress={() => navigation.navigate('Profile')}>
                        <Icon style={styles.nav_icon_profile} color= "#80f7e3" size={30} name="user-circle-o"/>
                        <Text style= {{color:'#80f7e3'}}>Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        flex: 1
    },

    header_area: {
        borderColor: 'white',
        width: '100%',
        height: 100,
        marginBottom: 10
    },
    
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '100%',
        alignItems: 'center',   
    },

    header_text_area: {
        flex:3,
        paddingLeft: 90,
        paddingTop: 10
        
    },

    header_text: {
        fontSize: 17,
        color: '#004b67',
        fontWeight: 'bold',
    },

    header_image_area: {
        marginLeft: 2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },

    header_image: {
        width: '70%',
        height: '70%',
        resizeMode: 'contain',
        borderRadius: 200
    },

    header_icon: {
        flex:1,
        backgroundColor: 'white',
        color: '#eee',
    },

    header_icon_arrow: {
        color: '#004b67',
        marginLeft: 24,
        marginTop: 0
    },

    header_sub_title:{
        fontWeight: 'bold',
        fontSize: 19,
        marginTop: 10,
        marginLeft: 15,
        color: 'black'
    },

    nps_image: {
        flexBasis: '10%',
        width: 50,
        height: 50,
        borderRadius: 10,
        borderColor: '#004b67',
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
export default PetShopsScreen;