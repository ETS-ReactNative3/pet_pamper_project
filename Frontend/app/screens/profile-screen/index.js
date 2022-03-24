import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import { Avatar, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import {useSelector, useDispatch} from 'react-redux'


function ProfileScreen({navigation}) {
    const {userToken, userFirstName, userLastName, userImage, userStatus} = useSelector(state => state.userReducer)
    // const dispatch = useDispatch()
    
    const [image, setImage] = React.useState(null); 
    const [image_base64, setImageBase64] = React.useState(null);
    const url = 'http://192.168.1.107:3000/user/image'

    const pickImage = async () => {
        
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,3],
            base64: true,
            quality: 0.5,
        });
        
        setImageBase64(result.base64);
        setImage(result.uri)
      };

            
    useEffect(async ()=> {
        let results = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                token: userToken,
                image: image_base64
            })
        })

        results = await results.json()

      },[image])

    
    return (
        <View style={styles.background}>

            <TouchableOpacity onPress={pickImage} style={styles.edit_image_icon}>
                <Icon  color="black" size={25} name="edit" />
            </TouchableOpacity>


            <TouchableOpacity>     
                <View style= {styles.profile_image_area}>
                    {image == null ? <Image style= {styles.profile_image} source={require('../../assets/avatar.png')}/> : <Image style= {styles.profile_image} source={{ uri: image}}/>}
                </View>
            </TouchableOpacity>

            <View>
                <Text style= {styles.user_name}>{userFirstName} {userLastName}</Text>
                <Text style= {styles.user_status}>{userStatus}</Text>
            </View>

            {/* A dog is the only creature that loves you more than you love yourself. */}
            <View style={styles.edit_area}>
                <View style={styles.edit}>                              
                    
                    <Icon style={styles.edit_user_icon} color="black" size={25} name="user" />
                    
                    
                    <View style={styles.edit_text_area}>
                        <Text style={styles.edit_text}>Edit profile</Text>
                    </View>

                    <TouchableOpacity onPress={()=> navigation.navigate('Edit Profile')}>
                        <Icon style={styles.edit_icon} color="black" size={25} name="angle-right" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.edit_area}>
                <View style={styles.edit}>                              
                    
                    <Icon style={styles.create_user_icon} color="black" size={25} name="group" />
                    
                    
                    <View style={styles.create_text_area}>
                        <Text style={styles.edit_text}>Create community</Text>
                    </View>

                    <TouchableOpacity onPress={()=> navigation.navigate('Create Community')}>
                        <Icon style={styles.edit_icon} color="black" size={25} name="angle-right" />
                    </TouchableOpacity>
                </View>
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

                    <TouchableOpacity style={{flex: 1}} onPress={() => navigation.navigate('Profile')}>
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

    profile_image_area: {
        width: '100%',
        height: 200,
        alignItems: 'center',
    },

    profile_image: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },

    user_name: {
        marginTop: 20,
        fontSize: 35,
        fontWeight: 'bold',
        marginLeft: 20,
        color: '#004b67'
    },

    user_status: {
        marginTop: 10,
        fontSize: 15,
        marginLeft: 20,
        marginRight: 30,
        marginBottom: 30
    },

    edit_area: {
        borderColor: 'white',
        width: '100%',
        height: 50,
    },
    
    edit: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '100%',
        alignItems: 'center',   
    },

    edit_text_area: {
        flex:3,
        paddingLeft: 24,       
    },
    
    create_text_area: {
        flex:3,
        paddingLeft: 20,       
    },

    edit_text: {
        fontSize: 18,
        color: 'black',
    },

    edit_user_icon: {
        backgroundColor: 'white',
        marginLeft: 24
    },
    
    edit_image_icon: {
        position: 'absolute',
        left: 327,
        top: 5,
        zIndex: 1, 
    },

    create_user_icon: {
        backgroundColor: 'white',
        marginLeft: 20
    },
   
    edit_icon: {
        backgroundColor: 'white',
        marginRight: 20
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
export default ProfileScreen;