import React from 'react';
import {ScrollView, View, Text, StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native'
import Header from '../../components/header'
import NearbyVeterinaries from '../../components/nearbyVeterinaries'
import NavigationBar from '../../components/navigationBar'
import { Avatar, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'
import {useSelector, useDispatch} from 'react-redux'
import {setUserNearbyVeterinaries} from '../../redux/actions/user-info'
import * as Linking from 'expo-linking'
import {getPreciseDistance} from 'geolib'
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import MapView, { Callout, Marker } from "react-native-maps";
import {styles} from './css'

function VeterinariesScreen({navigation}) {
    const {userToken, userImage, userNearbyVeterinaries, userLatitude, userLongitude} = useSelector(state => state.userReducer)
    const dispatch= useDispatch()
    const [selectedIndex, setSelectedIndex] = React.useState(0)
    const url = 'http://192.168.1.107:3000/user/veterinaries'

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
        
        const nearby_veterinaries = result.filter(value => (getPreciseDistance({ latitude: value.latitude, longitude: value.longitude }, { latitude: userLatitude, longitude: userLongitude }))/1000 <= 1 )
        dispatch(setUserNearbyVeterinaries(nearby_veterinaries))
        
      }, []);

      const nv_items = userNearbyVeterinaries

    function locateVeterinary(nv_item) {
        const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
        const latLng = `${nv_item.latitude},${nv_item.longitude}`;
        const label = 'Custom Label';
        const url = Platform.select({
        ios: `${scheme}${label}@${latLng}`,
        android: `${scheme}${latLng}(${label})`
        });

            
        Linking.openURL(url);
    }

    return (
        <View style={styles.background}>
         
            <View style={styles.header_area}>
                <View style={styles.header}>              
                    <View style={styles.header_image_area}>
                        <Image style={styles.header_image} source={{uri: `data:image/gif;base64,${userImage}`}}></Image>
                    </View>

                    <View style={styles.header_text_area}>
                        <Text style={styles.header_text}>Veterinary</Text>
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
                <Text style={styles.header_sub_title}>Nearby veterinaries</Text>
                
                <View>
                    <ScrollView>
                        {nv_items.map((nv_item, nv_index) => (
                            <View key= {nv_index}>
                                <View>
                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <View>
                                            <Image style= {styles.nv_image} source= {{uri: `data:image/gif;base64,${nv_item.image}`}}/>
                                        </View>

                                        <View style= {styles.nv_text}>
                                            <Text style= {styles.nv_text_title}>{nv_item.first_name}</Text>
                                            {/* <Text style= {styles.nv_text_location}>{nv_item.location}</Text> */}
                                        </View>

                                        <View>    
                                            <TouchableOpacity style= {styles.nv_button} onPress= {()=> locateVeterinary(nv_item)}>
                                                <Text style={styles.nv_button_text}>LOCATE</Text>
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

                    {nv_items.map((nv_item, nv_index) => (                 
                        <View key= {nv_index}>
                            <Marker coordinate={{latitude: parseFloat(nv_item.latitude), longitude: parseFloat(nv_item.longitude)}} 
                            pinColor="red" 
                            onPress= {()=>locateVeterinary(nv_item)}>                                                            
                                <Callout style={{width: 100, alignItems:'center'}}>   
                                    <Text>{nv_item.first_name}</Text>   
                                </Callout>
                            </Marker>
                        </View>
                    ))}              
                </MapView>
            </View>}

        </View>
    );
}

export default VeterinariesScreen;