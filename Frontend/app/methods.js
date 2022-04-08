import * as ImagePicker from 'expo-image-picker';

export const userUrl = (route) => {
    return (
        'http://192.168.1.107:3000/user/' + route
    )
}

export const communityUrl = (route) => {
    return (
        'http://192.168.1.107:3000/community/' + route
    )
}


export const header = () => {
    return (
        {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    )
}

export const userCreateCommunityImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4,4],
        base64: true,
        quality: 0.3,
    });
    
    return result
};

export const userProfileImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4,4],
        base64: true,
        quality: 0.3,
    });
    
    return result
};

export const imageUri = (image) => {
    return (
        'data:image/gif;base64,' + image
    )
}