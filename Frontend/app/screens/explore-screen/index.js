import {View} from 'react-native'
import {styles} from './css'
import ExploreHeader from './header';
import FollowedCommunties from './followed-communities';
import NearbyCommunties from './nearby-communities';

export default function ExploreScreen({ navigation }) {
    return (
        <View style={styles.background}>
            <ExploreHeader navigation={navigation}/>
            <FollowedCommunties/>
            <NearbyCommunties/>
        </View>
    );
}
