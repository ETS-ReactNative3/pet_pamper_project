import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import SigninScreen from './app/screens/signin-screen';


export default function App() {
  console.log("App Executed")
  return (
    <SafeAreaView style= {styles.AndroidSafeArea}>
      <SigninScreen/>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex:1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
