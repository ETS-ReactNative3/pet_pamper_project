import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import Header from '../../components/header'
import FollowedCommunties from '../../components/followedCommunities'
import NearbyCommunities from '../../components/nearbyCommunities'

function ExploreScreen(props) {
    return (
        <View>
            <Header title={'Discover'} sub_title={'Your communities'}/>
            <FollowedCommunties/>
            <Text style={styles.sub_title}>Nearby communities</Text>
            <NearbyCommunities/>
        </View>
    );
}

const styles = StyleSheet.create({
    sub_title:{
        fontWeight: 'bold',
        fontSize: 19,
        marginLeft: 15,
        color: '#004b67'
    }
})
export default ExploreScreen;