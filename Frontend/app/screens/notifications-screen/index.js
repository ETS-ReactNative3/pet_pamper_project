import React from 'react';
import {ScrollView, View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import { Avatar, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'
import {useSelector, useDispatch} from 'react-redux'
import {getUserNotifications} from '../../redux/actions/user-info'
import * as Linking from 'expo-linking'
import {styles} from './css'
import {getNotifications} from '../../services'

function NotificationsScreen({navigation}) {

    const {userToken, userNotifications} = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    // url = 'http://192.168.1.107:3000/user/notifications'
    
    React.useEffect(async ()=> {
        // let result = await fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Accept": "application/json"
        //     },
        //     body: JSON.stringify({
        //         token: userToken
        //     })
        // })

        let result = await getNotifications(userToken)
        dispatch(getUserNotifications(result[0].notifications))
        
      }, []);
    
      const notification_items = userNotifications

      function locateUser(notification_item) {
        const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
        const latLng = `${notification_item.latitude},${notification_item.longitude}`;
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
                    <TouchableOpacity onPress={()=> navigation.navigate('Explore')}>
                        <Avatar.Icon style={styles.header_icon} color='black' size={60} icon="chevron-left" />
                    </TouchableOpacity>

                    <View style={styles.header_text_area}>
                        <Text style={styles.header_text}>Notification</Text>
                        <Icon style={styles.header_icon_arrow} size={20} name="chevron-down"/>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                        <Avatar.Icon style={styles.header_icon} size={40} icon="bell" />
                    </TouchableOpacity>
                </View>

                <Text style={styles.header_sub_title}>Your notifications</Text>
            </View>

            <View>
                <ScrollView>
                    {notification_items.map((notification_item, notification_index) => (
                        <View key= {notification_index}>
                            <View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <View>
                                        <Image style= {styles.notification_image} source= {{uri: `data:image/gif;base64,${notification_item.image}`}}/>
                                    </View>

                                    <View style= {styles.notification_text}>
                                        <Text style= {styles.notification_text_title}>{notification_item.first_name} {notification_item.last_name}</Text>
                                    </View>

                                    <View>    
                                        <TouchableOpacity style= {styles.notification_button} onPress= {()=> locateUser(notification_item)}>
                                            <Text style={styles.notification_button_text}>LOCATE</Text>
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

export default NotificationsScreen;