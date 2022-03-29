import React from 'react';
import {ScrollView, View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import Header from '../../components/header'
import FollowedCommunties from '../../components/followedCommunities'
import NearbyCommunities from '../../components/nearbyCommunities'
import NavigationBar from '../../components/navigationBar'
import { Avatar, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'
import {useSelector, useDispatch} from 'react-redux'
import {addUserFollowedCommunity, removeUserUnfollowedCommunity, setUserFollowedCommunities, setUserUnFollowedCommunities} from '../../redux/actions/user-info'
import {getPreciseDistance} from 'geolib'
import {styles} from './css'

function ExploreScreen({ navigation }) {
    
    const {userId, userToken, userImage, userCommunities, userFollowedCommunities, userUnFollowedCommunities, userLatitude, userLongitude, userFirstName, userLastName} = useSelector(state => state.userReducer)
    const dispatch= useDispatch()
    const url_followed_communities = 'http://192.168.1.107:3000/user/communities'
    const url_all_communities = 'http://192.168.1.107:3000/user/all_communities'
    const url_add_community = 'http://192.168.1.107:3000/user/add_community'
    const url_ping_community = 'http://192.168.1.107:3000/user/ping_community'

    React.useEffect(async ()=> {
            let result = await fetch(url_followed_communities, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    communities: userCommunities
                })
            })
    
            result = await result.json()
            const nearby_followed_communities = result.filter(value => (getPreciseDistance({ latitude: value.latitude, longitude: value.longitude }, { latitude: userLatitude, longitude: userLongitude }))/1000 <= 1 )
            dispatch(setUserFollowedCommunities(nearby_followed_communities))
            
          }, [userCommunities]);
        
          const fc_items = userFollowedCommunities
    
    React.useEffect(async ()=> {
            let result = await fetch(url_all_communities, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({})
            })
    
            result = await result.json()
            const nearby_unfollowed_communities = result.filter(value => (getPreciseDistance({ latitude: value.latitude, longitude: value.longitude }, { latitude: userLatitude, longitude: userLongitude }))/1000 <= 1  && !userCommunities.includes(value._id))
            dispatch(setUserUnFollowedCommunities(nearby_unfollowed_communities))
            
          }, [userCommunities]);

          const nc_items = userUnFollowedCommunities
          

    async function addCommunity(nc_item) {

        let result = await fetch(url_add_community, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                id: nc_item._id,
                token: userToken,
                user_id: userId,
                communities: userCommunities
            })
        })

        result = await result.json()
        dispatch(removeUserUnfollowedCommunity(nc_item))
        dispatch(addUserFollowedCommunity(nc_item))
        
           
        
    }     
    
    async function pingCommunity(fc_item) {

        let result = await fetch(url_ping_community, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                members: fc_item.members,
                first_name: userFirstName,
                last_name: userLastName,
                latitude: userLatitude,
                longitude: userLongitude,
                image: userImage,
            })
        })

        result = await result.json()
          
        
    }     
    
      
    return (
        <View style={styles.background}>
            <View style={styles.header_area}>
                <View style={styles.header}>              
                    <View style={styles.header_image_area}>
                        <Image style={styles.header_image} source={{uri: `data:image/gif;base64,${userImage}`}}></Image>
                    </View>

                    <View style={styles.header_text_area}>
                        <Text style={styles.header_text}>Discover</Text>
                        <Icon style={styles.header_icon_arrow} size={20} name="chevron-down"/>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                        <Avatar.Icon style={styles.header_icon} size={40} icon="bell" />
                    </TouchableOpacity>
                </View>

                <Text style={styles.header_sub_title}>Your communities</Text>
            </View>

            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {fc_items.map((fc_item, fc_index) => (
                        <View key= {fc_index} >
                            <TouchableOpacity style={{alignItems: 'center'}} onPress={()=> pingCommunity(fc_item)}>
                                <Image style= {styles.fc_image} source= {{uri: `data:image/gif;base64,${fc_item.image}`}}/>

                                <Text style= {styles.fc_text}>{fc_item.name}</Text>
                                <View style={styles.fc_button_area}>
                                    <View style={styles.fc_button}>
                                        <Text style={styles.fc_button_text}>PING</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))}         
                </ScrollView>
            </View>

            <Text style={styles.sub_title}>Nearby communities</Text>

            <View>
                <ScrollView >
                    {nc_items.map((nc_item, nc_index) => (
                        <View key= {nc_index}>
                            <View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <View>
                                        <Image style= {styles.nc_image} source= {{uri: `data:image/gif;base64,${nc_item.image}`}}/>
                                    </View>
    
                                    <View style= {styles.nc_text}>
                                        <Text style= {styles.nc_text_title}>{nc_item.name}</Text>
                                        <Text style= {styles.nc_text_members}>{nc_item.members.length} members</Text>
                                    </View>
    
                                    <View>    
                                        <TouchableOpacity style= {styles.nc_button} onPress={()=> addCommunity(nc_item)}>
                                            <Text style={styles.nc_button_text}>JOIN</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))}             
                </ScrollView>              
            </View>

        </View>
    );
}


export default ExploreScreen;