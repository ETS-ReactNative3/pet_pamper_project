import React from 'react';
import {View} from 'react-native'
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import {styles} from './css'
import VeterinariesList from './Veterinaries-list';
import VeterinariesMap from './Veterinaries-map';

export default function Veterinaries() {
    const [selectedIndex, setSelectedIndex] = React.useState(0)

    return (
        <View>
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

            {selectedIndex == 0 ? <VeterinariesList/> : <VeterinariesMap/>}
        </View>
    );
}
