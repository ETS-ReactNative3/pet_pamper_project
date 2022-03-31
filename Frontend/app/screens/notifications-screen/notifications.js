import React from 'react';
import {ScrollView, View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import {getUserNotifications} from '../../redux/actions/user-info'
import * as Linking from 'expo-linking'
import {styles} from './css'
import {getNotifications} from '../../services'


export default function Notifications({navigation}) {

    const {userToken, userNotifications} = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    
    React.useEffect(async ()=> {
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
    );
}
