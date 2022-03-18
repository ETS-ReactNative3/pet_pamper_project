import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import HomeScreen from './app/screens/home-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from './app/screens/signup-screen';
import SigninScreen from './app/screens/signin-screen';
import ExploreScreen from './app/screens/explore-screen';
import VeterinariesScreen from './app/screens/veterinaries-screen';

const stack = createNativeStackNavigator();

export default function App() {
  console.log("App Executed")
  return (
    <SafeAreaView style= {styles.AndroidSafeArea}>
      <VeterinariesScreen/>
      {/* <NavigationContainer>
        <stack.Navigator>
          <stack.Screen 
            name="Home"
            component={HomeScreen}
            options={{ title: '', headerShown: false }}
          />
        <stack.Screen
            name="Sign Up"
            component={SignupScreen}
            options={{ title: '' }}
          />

        <stack.Screen
            name="Sign In"
            component={SigninScreen}
            options={{ title: '' }}
          />

        <stack.Screen
            name="Explore"
            component={ExploreScreen}
            options={{ title: '', headerShown: false }}
          />
        
          <stack.Screen
            name="Veterinaries"
            component={VeterinariesScreen}
            options={{ title: '', headerShown: false }}
          />
        </stack.Navigator>
      </NavigationContainer> */}
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
