import { View } from 'react-native';
import {styles} from './css'
import HomeImage from './image';
import BottomArea from './bottom-area';

export default  function HomeScreen({ navigation }) {
    return (
        <View style= {styles.backgroudArea}>
            <HomeImage/>
            <BottomArea navigation={navigation}/>
        </View>  
    );
}