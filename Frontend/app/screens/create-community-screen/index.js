import {View} from 'react-native'
import {styles} from './css'
import CreateCommunityHeader from './header';
import InputForm from './input-form';

export default function CreateCommunityScreen({navigation}) {
    return (
        <View style={styles.background}>
            <CreateCommunityHeader navigation={navigation}/>
            <InputForm/>
        </View>
    )
}
