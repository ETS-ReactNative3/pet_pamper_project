import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import HomeScreen from './app/screens/home-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignupScreen from './app/screens/signup-screen';
import SigninScreen from './app/screens/signin-screen';
import ExploreScreen from './app/screens/explore-screen';
import VeterinariesScreen from './app/screens/veterinaries-screen';
import PetShopsScreen from './app/screens/pet-shops-screen';
import PetShopsMapScreen from './app/screens/pet-shops-map-screen';
import NotificationsScreen from './app/screens/notifications-screen';
import ProfileScreen from './app/screens/profile-screen';
import EditProfileScreen from './app/screens/edit-profile-screen';
import EditStatusScreen from './app/screens/edit-status-screen';
import CreateCommunityScreen from './app/screens/create-community-screen';
import { Provider } from 'react-redux';
import { Store } from './app/redux/store';
import Tabs from './app/navigation'
import NavigationScreens from "./app/navigation"


export default function App() {
  console.log("App Executed")
  return (
    <NavigationScreens/>
    // <Provider store={Store}>
    //   <SafeAreaView style= {styles.AndroidSafeArea}>
    //     <NavigationContainer>
          
    //     <stack.Navigator>
    //         <stack.Screen 
    //           name="Home"
    //           component={HomeScreen}
    //           options={{ title: '', headerShown: false }}
    //         />

    //       <stack.Screen
    //           name="Sign Up"
    //           component={SignupScreen}
    //           options={{ title: '' }}
    //         />

    //       <stack.Screen
    //           name="Sign In"
    //           component={SigninScreen}
    //           options={{ title: '' }}
    //         />

    //       <stack.Screen
    //           name="Explore"
    //           component={MainScreens}
    //           options={{ title: '', headerShown: false }}
    //         />

    //         <stack.Screen
    //           name="Veterinaries"
    //           component={MainScreens}
    //           options={{ title: '', headerShown: false }}
    //         />      
            

    //         <stack.Screen
    //           name="Pet Shops"
    //           component={MainScreens}
    //           options={{ title: '', headerShown: false }}
    //         />
            
    //         <stack.Screen
    //           name="Pet Shops Map"
    //           component={PetShopsMapScreen}
    //           options={{ title: '', headerShown: false }}
    //         />
    //         <stack.Screen
    //           name="Notifications"
    //           component={NotificationsScreen}
    //           options={{ title: '', headerShown: false }}
    //         />
            
    //         <stack.Screen
    //           name="Profile"
    //           component={MainScreens}
    //           options={{ title: '', headerShown: false }}
    //         />
            
    //         <stack.Screen
    //           name="Edit Profile"
    //           component={EditProfileScreen}
    //           options={{ title: '', headerShown: false }}
    //         />
            
    //         <stack.Screen
    //           name="Edit Status"
    //           component={EditStatusScreen}
    //           options={{ title: '', headerShown: false }}
    //         />

    //         <stack.Screen
    //           name="Create Community"
    //           component={CreateCommunityScreen}
    //           options={{ title: '', headerShown: false }}
    //         />

    //       </stack.Navigator>
    //     </NavigationContainer>
    //   </SafeAreaView>
    // </Provider>
  );
}

