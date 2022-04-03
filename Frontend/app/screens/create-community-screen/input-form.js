import {useSelector, useDispatch} from 'react-redux'
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native'
import { TextInput } from 'react-native-paper';
import {styles} from './css'
import {userCreateCommunity, usercurrentLocation} from '../../services'
import {userCreateCommunityImage} from '../../methods'

export default function InputForm() {
    const dispatch = useDispatch()  
    const {userToken} = useSelector(state => state.userReducer)
    const [image, setImage] = React.useState(null);
    const [image_base64, setImageBase64] = React.useState(null);
    const [name, onChangeName] = React.useState("");
    const [status, setStatus] = React.useState("");
    const [latitude, setLatitude] = React.useState("");
    const [longitude, setLongitude] = React.useState("");
    
    const getCommunityLocation = async () => {
        let location = await usercurrentLocation()       
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);
      };

    const pickImage = async () => {
        let result = await userCreateCommunityImage()       
        setImageBase64(result.base64);
        setImage(result.uri)
      };
    
    return (
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
                    
                    {image && <Image source={{ uri: image}} style={styles.picked_image} />}
                </View>

                <View  style={styles.button_area_create}>
                    <TouchableOpacity style={styles.button_create} onPress={async ()=> setStatus(await userCreateCommunity(name, userToken, image_base64, latitude, longitude))}>
                        <Text style={styles.text_create}>CREATE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
