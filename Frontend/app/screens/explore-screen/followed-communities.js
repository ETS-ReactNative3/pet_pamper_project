import {useSelector, useDispatch} from 'react-redux'
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import { TextInput } from 'react-native-paper';
import {styles} from './css'
import {setUserFollowedCommunities} from '../../redux/actions/user-info'
import {getUserFollowedCommunities, pingUserCommunityMembers} from '../../services'

export default function FollowedCommunties() {
    const {userCommunities, userFollowedCommunities} = useSelector(state => state.userReducer)
    const dispatch = useDispatch()  
    
    React.useEffect(async ()=> {   
        let result_fc = await getUserFollowedCommunities(userCommunities)
        const nearby_followed_communities = result_fc.filter(value => (getPreciseDistance({ latitude: value.latitude, longitude: value.longitude }, { latitude: userLatitude, longitude: userLongitude }))/1000 <= 1 )
        dispatch(setUserFollowedCommunities(nearby_followed_communities))          
        }, [userCommunities]);
    
        const fc_items = userFollowedCommunities
    
    return (
        
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
    );
}
