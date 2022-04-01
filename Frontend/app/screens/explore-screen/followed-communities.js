import {useSelector, useDispatch} from 'react-redux'
import React, { useState, useEffect, useRef } from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image, Button, Platform} from 'react-native'
import {styles} from './css'
import {setUserFollowedCommunities} from '../../redux/actions/user-info'
import {getUserFollowedCommunities, pingUserCommunityMembers, getUsersPushToken} from '../../services'
import {getPreciseDistance} from 'geolib'
import {imageUri} from '../../methods'
import * as Notifications from 'expo-notifications';

export default function FollowedCommunties() {
    const {userCommunities, userFollowedCommunities, userLatitude, userLongitude, userFirstName, userLastName, userImage} = useSelector(state => state.userReducer)
    const dispatch = useDispatch()  

    const responseListener = useRef();

    useEffect(() => {
        responseListener.current = Notifications.addNotificationResponseReceivedListener;
    
        return () => {
          Notifications.removeNotificationSubscription(responseListener.current);
        };
      }, []);


    async function sendPushNotification(user_push_tokens) {
        
        user_push_tokens.map(async (user_push_token) =>{
            const message = {
                to: user_push_token.push_token,
                sound: 'default',
                title: `${userFirstName} ${userLastName}`,
                body: "Join me on my pet walk",
                data: { latitude: userLatitude, longitude: userLongitude },
              };
            
              await fetch('https://exp.host/--/api/v2/push/send', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Accept-encoding': 'gzip, deflate',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(message),
              });
        })

    }


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
                        <TouchableOpacity style={{alignItems: 'center'}} onPress={async ()=> {await pingUserCommunityMembers(fc_item, userFirstName, userLastName, userLatitude, userLongitude, userImage), await sendPushNotification(await getUsersPushToken(fc_item))}}>
                            <Image style= {styles.fc_image} source= {{uri: imageUri(fc_item.image)}}/>

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

            {/* <Text>Title: {notification && notification.request.content.title} </Text>
        <Text>Body: {notification && notification.request.content.body}</Text>
        <Text>Data: {notification && JSON.stringify(notification.request.content.data.latitude)}</Text> */}
        </View>
    );
}
