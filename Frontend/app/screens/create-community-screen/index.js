import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { Avatar, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
// import * as Location from 'expo-location';
// import * as ImagePicker from 'expo-image-picker';
import {useSelector} from 'react-redux'
import {styles} from './css'
import {userCreateCommunity} from '../../services'
import {userCreateCommunityImage, userCreateCommunityLocation} from '../../methods'
import CreateCommunityHeader from './header';

function CreateCommunityScreen({navigation}) {
    const {userToken} = useSelector(state => state.userReducer)
    const [image, setImage] = React.useState(null);
    const [image_base64, setImageBase64] = React.useState(null);
    const [name, onChangeName] = React.useState("");
    const [status, setStatus] = React.useState("");
    const [latitude, setLatitude] = React.useState("");
    const [longitude, setLongitude] = React.useState("");


    const getCommunityLocation = async () => {
        let location = await userCreateCommunityLocation()       
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);
      };

    const pickImage = async () => {
        let result = await userCreateCommunityImage()       
        setImageBase64(result.base64);
        setImage(result.uri)
      };




    return (
        <View style={styles.background}>
            {/* <View style={styles.header_area}>
                <View style={styles.header}>              
                    <TouchableOpacity onPress={()=> navigation.navigate('Profile Screen')}>
                        <Avatar.Icon style={styles.header_icon} color='black' size={60} icon="chevron-left" />
                    </TouchableOpacity>

                    <View style={styles.header_text_area}>
                        <Text style={styles.header_text}>Create Community</Text>
                        <Icon style={styles.header_icon_arrow} size={20} name="chevron-down"/>
                    </View>

                    <TouchableOpacity onPress={()=>navigation.navigate('Notifications')}>
                        <Avatar.Icon style={styles.header_icon} size={40} icon="bell" />
                    </TouchableOpacity>
                </View>

                <Text style={styles.header_sub_title}></Text>
            </View> */}
            <CreateCommunityHeader navigation={navigation}/>
            <View style= {styles.backgroudArea}>

                <View style={styles.edit_form}>

                    <Text>{status}</Text>

                    <TextInput
                        style= {styles.name_input}
                        mode="outlined"
                        label="Community Name"
                        placeholder="Enter Community Name"
                        onChangeText={newText => onChangeName(newText)}
                    /> 

                    <View style={styles.picked_image_area}>
                        <TouchableOpacity onPress={()=> {pickImage(), getCommunityLocation()}} style={styles.picked_image_button}>
                            <Text style={styles.picked_image_text}>Choose an image</Text>
                        </TouchableOpacity>
                        {/* {image &&<Text>{image}</Text>} */}
                        {image && <Image source={{ uri: image}} style={styles.picked_image} />}
                    </View>

                    <View  style={styles.button_area_create}>
                        <TouchableOpacity style={styles.button_create} onPress={async ()=> setStatus(await userCreateCommunity(name, userToken, image_base64, latitude, longitude))}>
                            <Text style={styles.text_create}>CREATE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

    </View>
    )
}



export default CreateCommunityScreen;