import React from 'react';
import {ScrollView, View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import Header from '../../components/header'
import FollowedCommunties from '../../components/followedCommunities'
import NearbyCommunities from '../../components/nearbyCommunities'
import NavigationBar from '../../components/navigationBar'
import { Avatar, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'
import {useSelector, useDispatch} from 'react-redux'
import {addUserFollowedCommunity, removeUserUnfollowedCommunity, setUserFollowedCommunities, setUserUnFollowedCommunities} from '../../redux/actions/user-info'



function ExploreScreen({ navigation }) {

    const {userToken, userImage, userCommunities, userFollowedCommunities, userUnFollowedCommunities, userLatitude, userLongitude} = useSelector(state => state.userReducer)
    const dispatch= useDispatch()
    const url_followed_communities = 'http://192.168.1.107:3000/user/communities'
    const url_all_communities = 'http://192.168.1.107:3000/user/all_communities'
    const url_add_community = 'http://192.168.1.107:3000/user/add_community'

    React.useEffect(async ()=> {
            let result = await fetch(url_followed_communities, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    communities: userCommunities
                })
            })
    
            result = await result.json()
            const nearby_followed_communities = result.filter(value => Math.abs(value.latitude - userLatitude) <= 1 && + Math.abs(value.longitude - userLongitude) <= 1 )
            dispatch(setUserFollowedCommunities(nearby_followed_communities))
            
          }, [userCommunities]);
        
          const fc_items = userFollowedCommunities
    
    React.useEffect(async ()=> {
            let result = await fetch(url_all_communities, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({})
            })
    
            result = await result.json()
            const nearby_unfollowed_communities = result.filter(value => Math.abs(value.latitude - userLatitude) <= 1 && + Math.abs(value.longitude - userLongitude) <= 1 && !userCommunities.includes(value._id))
            dispatch(setUserUnFollowedCommunities(nearby_unfollowed_communities))
            
          }, [userCommunities]);

          const nc_items = userUnFollowedCommunities
          

     
      
    return (
        <View style={styles.background}>
            <View style={styles.header_area}>
                <View style={styles.header}>              
                    <View style={styles.header_image_area}>
                        <Image style={styles.header_image} source={{uri: `data:image/gif;base64,${userImage}`}}></Image>
                    </View>

                    <View style={styles.header_text_area}>
                        <Text style={styles.header_text}>Discover</Text>
                        <Icon style={styles.header_icon_arrow} size={20} name="chevron-down"/>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                        <Avatar.Icon style={styles.header_icon} size={40} icon="bell" />
                    </TouchableOpacity>
                </View>

                <Text style={styles.header_sub_title}>Your communities</Text>
            </View>

            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {fc_items.map((fc_item, fc_index) => (
                        <View key= {fc_index} >
                            <TouchableOpacity style={{alignItems: 'center'}}>
                                <Image style= {styles.fc_image} source= {{uri: `data:image/gif;base64,${fc_item.image}`}}/>

                                <Text style= {styles.fc_text}>{fc_item.name}</Text>
                                <View style={styles.fc_button_area}>
                                    <View style={styles.fc_button}>
                                        <Text style={styles.fc_button_text}>PING</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))}         
                </ScrollView>
            </View>

            <Text style={styles.sub_title}>Nearby communities</Text>

            <View>
                <ScrollView >
                    {nc_items.map((nc_item, nc_index) => (
                        <View key= {nc_index}>
                            <View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <View>
                                        <Image style= {styles.nc_image} source= {{uri: `data:image/gif;base64,${nc_item.image}`}}/>
                                    </View>
    
                                    <View style= {styles.nc_text}>
                                        <Text style= {styles.nc_text_title}>{nc_item.name}</Text>
                                        <Text style= {styles.nc_text_members}>{nc_item.members.length} members</Text>
                                    </View>
    
                                    <View>    
                                        <TouchableOpacity style= {styles.nc_button} onPress={()=> addCommunity(nc_item)}>
                                            <Text style={styles.nc_button_text}>JOIN</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))}             
                </ScrollView>              
            </View>

            
            <View style={styles.nav_bar}>

            <View style={styles.nav_icon_area}>

                <TouchableOpacity style={{flex: 1}} onPress={() => navigation.navigate('Explore')}>
                    <Icon style={styles.nav_icon_discover} color= "#80f7e3" size={30} name="group"/>
                    <Text style= {{color:'#80f7e3'}}>Discover</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{flex: 1.1}} onPress={() => navigation.navigate('Veterinaries')}>
                    <Icon  style={styles.nav_icon_vet} color= "#80f7e3" size={30} name="medkit"/>
                    <Text style= {{color:'#80f7e3'}}>Veterinary</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{flex: 1.02}} onPress={() => navigation.navigate('Pet Shops')}>
                    <Icon style={styles.nav_icon_shop} color= "#80f7e3" size={30} name="paw"/>
                    <Text style= {{color:'#80f7e3'}}>Pet Shop</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{flex: 1.}} onPress={() => navigation.navigate('Profile')}>
                    <Icon style={styles.nav_icon_profile} color= "#80f7e3" size={30} name="user-circle-o"/>
                    <Text style= {{color:'#80f7e3'}}>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        flex: 1
    },

    header_area: {
        borderColor: 'white',
        width: '100%',
        height: 100,
        marginBottom: 10
    },
    
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '100%',
        alignItems: 'center',   
    },

    header_text_area: {
        flex:3,
        paddingLeft: 90,
        paddingTop: 10       
    },

    header_text: {
        fontSize: 17,
        color: '#004b67',
        fontWeight: 'bold',
    },

    header_image_area: {
        marginLeft: 2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },

    header_image: {
        width: '70%',
        height: '70%',
        resizeMode: 'contain',
        borderRadius: 200
    },

    header_icon: {
        flex:1,
        backgroundColor: 'white',
        color: '#eee',
    },

    header_icon_arrow: {
        color: '#004b67',
        marginLeft: 24,
        marginTop: 0
    },

    header_sub_title:{
        fontWeight: 'bold',
        fontSize: 19,
        marginTop: 10,
        marginLeft: 15,
        color: 'black'
    },

    fc_image: {
        width: 100,
        height: 100,
        borderRadius: 100,
        opacity: 0.6,
        borderColor: '#004b67',
        borderWidth: 3,
        marginTop: 10,
        marginLeft: 10,
    },

    fc_text: {
        marginLeft: 10,
        marginTop: 5,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#004b67'
    },

    fc_button_area: {
        paddingHorizontal: 20
    },
    
    fc_button: {
        backgroundColor: '#004b67',
        borderRadius: 5,
        alignItems: 'center',
        position: 'relative',
        zIndex: 2,
        top: -86,
        left: 5,
        paddingVertical: 3,
        paddingHorizontal: 15
    },

    fc_button_text: {
        color: 'white'
    },

    sub_title:{
        fontWeight: 'bold',
        fontSize: 19,
        marginLeft: 15,
        color: 'black'
    },

    nc_image: {
        flexBasis: '10%',
        width: 50,
        height: 50,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
        marginTop: 10,
        marginLeft: 10,
    },

    nc_text: {
        flexBasis: '60%',
        marginLeft: 17,
        marginTop: 5,
    },

    nc_text_title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#004b67'
    },

    nc_text_members: {
        fontSize: 12,
        color: '#545454'
    },

    nc_button: {
        backgroundColor: '#004b67',
        marginRight: 10,
        flexBasis: '20%',
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 5,
        
    },

    nc_button_text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14
    },

    nav_bar:{
        position: 'absolute',
        top: 650,
        width: '100%',
        height: 60,
        backgroundColor: '#004b67'
    },

    nav_icon_area: {
        flexDirection:'row',
        flex:1,
        marginLeft: 35,
        marginTop: 8
    },

    nav_icon_discover: {
        marginLeft: 12
    },

    nav_icon_vet: {
        marginLeft: 17
    },

    nav_icon_shop: {
        marginLeft: 13,
    },

    nav_icon_profile: {
        marginLeft: 5
    },
})
export default ExploreScreen;