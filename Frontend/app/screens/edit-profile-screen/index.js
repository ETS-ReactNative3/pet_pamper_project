import {View} from 'react-native'
import {styles} from './css'
import EditProfileHeader from './header'
import InputForm from './input-form'

export default function EditProfileScreen({navigation}) {
    return (
        <View style={styles.background}>
            <EditProfileHeader navigation={navigation}/>
            <InputForm/>
        </View>
    )
}