import React from 'react';
import {View, Text} from 'react-native'
import Header from '../../components/header'
import FollowedCommunties from '../../components/followedCommunities'


function ExploreScreen(props) {
    return (
        <View>
            <Header title={'Discover'} sub_title={'Your communities'}/>
            <FollowedCommunties/>
        </View>
    );
}

export default ExploreScreen;