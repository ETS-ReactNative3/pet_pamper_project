import React from 'react';
import {ScrollView, View, Text, TouchableOpacity, Image} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import {setUserNearbyVeterinaries} from '../../redux/actions/user-info'
import * as Linking from 'expo-linking'
import {getPreciseDistance} from 'geolib'
import {styles} from './css'
import {getUserVeterinaries} from '../../services'
import { imageUri } from '../../methods';

export default function VeterinariesList() {
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
                <Text style={styles.header_sub_title}>Nearby veterinaries</Text>
                
                <View>
                    <ScrollView>
                        {nv_items.map((nv_item, nv_index) => (
                            <View key= {nv_index}>
                                <View>
                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <View>
                                            <Image style= {styles.nv_image} source= {{uri: imageUri(nv_item.image)}}/>
                                        </View>

                                        <View style= {styles.nv_text}>
                                            <Text style= {styles.nv_text_title}>{nv_item.first_name}</Text>
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
            </View> 
        </View>
    );
}
