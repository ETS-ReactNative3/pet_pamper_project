import React from 'react';
import {View} from 'react-native'
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import {styles} from './css'
import PetShopsList from './pet-shops-list';
import PetShopsMap from './pet-shops-map';

export default function PetShops() {
    const [selectedIndex, setSelectedIndex] = React.useState(0)

    return (
        <View style={styles.background}>
                <View>
                    <SegmentedControl
                        values={['List', 'Map']}
                        selectedIndex={selectedIndex}
                        onChange={(event) => {
                        setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
                        }}
                        style= {styles.list_controller}
                    />
                </View>  

            {selectedIndex == 0 ? <PetShopsList/> : <PetShopsMap/>}
        </View>
    );
}

