import {View} from 'react-native'
import {styles} from './css'
import StatusHeader from './header';
import InputForm from './input-form';

export default function EditStatusScreen({navigation}) {

    return (
        <View style={styles.background}>
            <StatusHeader navigation={navigation}/>
            <InputForm/>
        </View>
    )
}
