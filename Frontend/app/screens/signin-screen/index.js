import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Platform, StatusBar } from 'react-native';
import SigninButton from '../../components/signinButton'


function SigninScreen(props) {
    return (
        <View style= {styles.backgroudArea}>
            <Image style={styles.image} source={require("../../assets/Pet_Pamper_signIn.png")}/>
            <View style= {styles.googleButton}><SigninButton/></View>
        </View>  
    );
}






const styles = StyleSheet.create({
    backgroudArea: {
        flex:1,
        backgroundColor: "#004b67",
      },
    
      image: {
        flex:1,
        height: '100%',
        width: '100%',
        resizeMode:"stretch"
      },
    
      googleButton: {
        flex:1,
        backgroundColor: 'white',
        borderWidth: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center'
      }
})

export default SigninScreen;