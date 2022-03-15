import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import HomeScreen from './app/screens/home-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from './app/screens/signup-screen';

const Nav = createNativeStackNavigator();

export default function App() {
  console.log("App Executed")
  return (
    <SafeAreaView style= {styles.AndroidSafeArea}>
      <NavigationContainer>
        <Nav.Navigator>
          <Nav.Screen 
            name="Welcome to Pet Pamper"
            component={HomeScreen}
            options={{ title: '' }}
          />
        <Nav.Screen
            name="Sign Up"
            component={SignupScreen}
            options={{ title: '' }}
          />
        </Nav.Navigator>
      </NavigationContainer>
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
