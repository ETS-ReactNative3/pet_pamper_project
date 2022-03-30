import React from 'react';
import {View, Text} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import {setUserNearbyVeterinaries} from '../../redux/actions/user-info'
import * as Linking from 'expo-linking'
import {getPreciseDistance} from 'geolib'
import MapView, { Callout, Marker } from "react-native-maps";
import {styles} from './css'
import {getUserVeterinaries} from '../../services'

export default function VeterinariesMap() {
    const {userNearbyVeterinaries, userLatitude, userLongitude} = useSelector(state => state.userReducer)
    const dispatch= useDispatch()   

    React.useEffect(async ()=> {
        let result = await getUserVeterinaries()
        
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
        <View>
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
            </View>
        </View>
    );
}
