import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { Avatar, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Location from 'expo-location';
import * as ImagePicker from 'expo-image-picker';
import {useSelector} from 'react-redux'
import {styles} from './css'
import {userCreateCommunity} from '../../services'

function CreateCommunityScreen({navigation}) {
    const {userToken} = useSelector(state => state.userReducer)
    const [image, setImage] = React.useState(null);
    const [image_base64, setImageBase64] = React.useState(null);
    const [name, onChangeName] = React.useState("");
    const [status, setStatus] = React.useState("");
    const [latitude, setLatitude] = React.useState("");
    const [longitude, setLongitude] = React.useState("");
    // const url = 'http://192.168.1.107:3000/community/create_community'

    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLatitude(location.coords.latitude);
          setLongitude(location.coords.longitude);
        })();
      }, []);

      const pickImage = async () => {
        
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,3],
            base64: true,
            quality: 0.3,
        });
        
        setImageBase64(result.base64);
        setImage(result.uri)
      };

    
    // async function createCommunity() {
 
    //     let result = await fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         },
    //         body: JSON.stringify({
    //             name: name,
    //             token: userToken,
    //             image: image_base64, 
    //             latitude: latitude, 
    //             longitude: longitude, 
                
    //         })
    //     })

    //     result = await result.json()
        
    //     setStatus(result.message) 
        
    // }


    return (
        <View style={styles.background}>
            <View style={styles.header_area}>
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
            </View>

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
                        <TouchableOpacity onPress={pickImage} style={styles.picked_image_button}>
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