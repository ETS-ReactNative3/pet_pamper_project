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

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        flex: 1
    },

    header_area: {
        borderColor: 'white',
        width: '100%',
        height: 110,
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
        borderRadius: 200,
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
        color: 'black',
        marginBottom: 10
    },

    nv_image: {
        flexBasis: '10%',
        width: 50,
        height: 50,
        borderRadius: 10,
        borderColor: '#004b67',
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

    list_controller: {
        height: 35,
        marginTop: 10
    },

})
export default VeterinariesScreen;