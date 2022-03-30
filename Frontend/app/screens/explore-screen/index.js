import React from 'react';
import {ScrollView, View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import Header from '../../components/header'
import FollowedCommunties from '../../components/followedCommunities'
import NearbyCommunities from '../../components/nearbyCommunities'
import NavigationBar from '../../components/navigationBar'
import { Avatar, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'
import {useSelector, useDispatch} from 'react-redux'
import {addUserFollowedCommunity, removeUserUnfollowedCommunity, setUserFollowedCommunities, setUserUnFollowedCommunities, addUserCommunityId} from '../../redux/actions/user-info'
import {getPreciseDistance} from 'geolib'
import {styles} from './css'
import {getUserFollowedCommunities, getUserNearbyCommunities, addUserCommunities, pingUserCommunityMembers} from '../../services'
import ExploreHeader from './header';

function ExploreScreen({ navigation }) {
    
    const {userId, userToken, userImage, userCommunities, userFollowedCommunities, userUnFollowedCommunities, userLatitude, userLongitude, userFirstName, userLastName} = useSelector(state => state.userReducer)
    const dispatch= useDispatch()

    React.useEffect(async ()=> {   
        let result_fc = await getUserFollowedCommunities(userCommunities)
        const nearby_followed_communities = result_fc.filter(value => (getPreciseDistance({ latitude: value.latitude, longitude: value.longitude }, { latitude: userLatitude, longitude: userLongitude }))/1000 <= 1 )
        dispatch(setUserFollowedCommunities(nearby_followed_communities))          
        }, [userCommunities]);
    
        const fc_items = userFollowedCommunities
    
    React.useEffect(async ()=> {
        let result_nc = await getUserNearbyCommunities()
        const nearby_unfollowed_communities = result_nc.filter(value => (getPreciseDistance({ latitude: value.latitude, longitude: value.longitude }, { latitude: userLatitude, longitude: userLongitude }))/1000 <= 1  && !userCommunities.includes(value._id))
        dispatch(setUserUnFollowedCommunities(nearby_unfollowed_communities))           
        }, [userCommunities]);

        const nc_items = userUnFollowedCommunities
          

    async function addCommunity(nc_item, userToken, userId, userCommunities) {
        let result_ac = await addUserCommunities(nc_item, userToken, userId, userCommunities)
        dispatch(removeUserUnfollowedCommunity(nc_item))
        dispatch(addUserFollowedCommunity(result_ac))
        dispatch(addUserCommunityId(result_ac))
    }         
    
      
    return (
        <View style={styles.background}>
            <ExploreHeader navigation={navigation}/>


            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {fc_items.map((fc_item, fc_index) => (
                        <View key= {fc_index} >
                            <TouchableOpacity style={{alignItems: 'center'}} onPress={async ()=> await pingUserCommunityMembers(fc_item, userFirstName, userLastName, userLatitude, userLongitude, userImage)}>
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
                                        <TouchableOpacity style= {styles.nc_button} onPress={()=> addCommunity(nc_item, userToken, userId, userCommunities)}>
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