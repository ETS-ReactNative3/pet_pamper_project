import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions} from 'react-native'
import Header from '../../components/header'
import NearbyPetShops from '../../components/nearbyPetShops'
import NavigationBar from '../../components/navigationBar'
import { Avatar, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'
import {useSelector, useDispatch} from 'react-redux'
import {setUserNearbyPetShops} from '../../redux/actions/user-info'
import * as Location from 'expo-location';
import * as Linking from 'expo-linking'
import {getPreciseDistance} from 'geolib'
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import MapView, { Callout, Marker } from "react-native-maps";
import {styles} from './css'

function PetShopsScreen({navigation}) {
    const {userToken, userImage, userNearbyPetShops, userLatitude, userLongitude} = useSelector(state => state.userReducer)
    const dispatch= useDispatch()
    const [selectedIndex, setSelectedIndex] = React.useState(0)
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

    //   React.useEffect(async () => {
    //       const location = await Location.reverseGeocodeAsync({latitude: 33.885351, longitude: 35.483362})
    //   console.log(location[0].city)},[])


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

                <View>
                    <SegmentedControl
                        values={['List', 'Map']}
                        selectedIndex={selectedIndex}
                        onChange={(event) => {
                        setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
                        }}
                        style= {styles.list_controller}
                    />
                </View>  
            </View>

            {selectedIndex == 0 ?
            <View>
                <Text style={styles.header_sub_title}>Nearby pet shops</Text>

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
                                            {/* <Text style= {styles.nps_text_location}>hello</Text> */}
                                        </View>

                                        <View>    
                                            <TouchableOpacity style= {styles.nps_button} onPress= {()=> locatePetShop(nps_item)}>
                                                <Text style={styles.nps_button_text}>LOCATE</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        ))}             
                    </ScrollView>
                </View>
            </View> :

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
                    loadingEnabled= {true}>
                
                    {nps_items.map((nps_item, nps_index) => (                 
                        <View key= {nps_index}>
                            <Marker coordinate={{latitude: parseFloat(nps_item.latitude), longitude: parseFloat(nps_item.longitude)}} 
                            pinColor="red" 
                            onPress= {()=>locatePetShop(nps_item)}>                                                            
                                <Callout style={{width: 100, alignItems:'center'}}>   
                                    <Text>{nps_item.first_name}</Text>   
                                </Callout>
                            </Marker>
                        </View>
                    ))}              
                </MapView>
            </View>}

        </View>

    );
}





export default PetShopsScreen;