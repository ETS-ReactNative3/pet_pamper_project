import {View} from 'react-native'
import {styles} from './css'
import NotificationsHeader from './header'
import Notifications from './notifications'

export default function NotificationsScreen({navigation}) {
    return (
        <View style={styles.background}>
            <NotificationsHeader navigation={navigation}/>
            <Notifications/>
        </View>
    );
}
