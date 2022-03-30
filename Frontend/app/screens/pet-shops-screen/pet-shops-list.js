import React from 'react';
import {View, Text,TouchableOpacity, Image, ScrollView} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import {setUserNearbyPetShops} from '../../redux/actions/user-info'
import * as Linking from 'expo-linking'
import {getPreciseDistance} from 'geolib'
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import MapView, { Callout, Marker } from "react-native-maps";
import {styles} from './css'
import {getUserPetShops} from '../../services'


export default function PetShopsList({navigation}) {
    const {userNearbyPetShops, userLatitude, userLongitude} = useSelector(state => state.userReducer)
    const dispatch= useDispatch()

    React.useEffect(async ()=> {
        let result = await getUserPetShops()      
        
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
        <View>
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
            </View>
        </View>

    );
}

 










{/* <Text style= {styles.nps_text_location}>hello</Text> */}

//   React.useEffect(async () => {
    //       const location = await Location.reverseGeocodeAsync({latitude: 33.885351, longitude: 35.483362})
    //   console.log(location[0].city)},[])