import {View} from 'react-native'
import {styles} from './css'
import VeterinariesHeader from './header'
import Veterinaries from './Veterinaries';

export default function VeterinariesScreen({navigation}) {
    return (
        <View style={styles.background}>
            <VeterinariesHeader navigation= {navigation}/>
            <Veterinaries/>
        </View>
    );
}

 