import React from "react";
import MapView, { Callout, Marker } from "react-native-maps";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from "react-native";
import { Avatar, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'
import {useSelector, useDispatch} from 'react-redux'
import {setUserNearbyPetShops} from '../../redux/actions/user-info'
import * as Linking from 'expo-linking'
import {getPreciseDistance} from 'geolib'

function PetShopsMapScreen({navigation}) {
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
        
        const nearby_pet_shops = result.filter(value => (getPreciseDistance({ latitude: value.latitude, longitude: value.longitude }, { latitude: userLatitude, longitude: userLongitude }))/1000 <= 1 )
        dispatch(setUserNearbyPetShops(nearby_pet_shops))
        
      }, []);

      const nps_items = userNearbyPetShops


    function locatePetShop(nps_item) {
        const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
        const latLng = `${nps_item.latitude},${nps_item.longitude}`;
        const label = 'Custom Label';
        const url = Platform.select({
        ios: `${scheme}${label}@${latLng}`,
        android: `${scheme}${latLng}(${label})`
        });

            
        Linking.openURL(url);
    }

    return (
        <View style={styles.background}>
          

            <View>
                <MapView
                    style={styles.map}
                    initialRegion={{
                    latitude: parseFloat(userLatitude),
                    longitude: parseFloat(userLongitude),
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                    }}
                    provider="google"
                    showsUserLocation= {true}
                    loadingEnabled= {true}
                >
                
                    {nps_items.map((nps_item, nps_index) => (
                        
                        <View key= {nps_index}>
                            <Marker coordinate={{latitude: parseFloat(nps_item.latitude), longitude: parseFloat(nps_item.longitude)}} 
                            pinColor="red" 
                            onPress= {()=>locatePetShop(nps_item)}
                            >
                                
                                
                                <Callout style={{width: 100, alignItems:'center'}}>   
                                    <Text>{nps_item.first_name}</Text>   
                                </Callout>
                            </Marker>
                        </View>
                    ))}              
                </MapView>
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

    container: {
        flex: 1,
      },
      map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
      },

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
        marginLeft: 10,
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
        paddingVertical: 3,
        paddingHorizontal: 15
    },

    fc_button_text: {
        color: 'white'
    },
})
export default PetShopsMapScreen;




 

        

      
    
