import {useSelector, useDispatch} from 'react-redux'
import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native'
import {styles} from './css'
import {addUserFollowedCommunity, removeUserUnfollowedCommunity,setUserUnFollowedCommunities, addUserCommunityId} from '../../redux/actions/user-info'
import {getUserNearbyCommunities, addUserCommunities} from '../../services'
import {getPreciseDistance} from 'geolib'

export default function NearbyCommunties() {
    const {userId, userToken, userCommunities, userUnFollowedCommunities, userLatitude, userLongitude} = useSelector(state => state.userReducer)
    const dispatch = useDispatch() 
    
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
        
        <View>
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
