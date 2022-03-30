import { StyleSheet, SafeAreaView, Platform, StatusBar, View, Text } from 'react-native';
import HomeScreen from './screens/home-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignupScreen from './screens/signup-screen';
import SigninScreen from './screens/signin-screen';
import ExploreScreen from './screens/explore-screen';
import VeterinariesScreen from './screens/veterinaries-screen';
import PetShopsScreen from './screens/pet-shops-screen';
import NotificationsScreen from './screens/notifications-screen';
import ProfileScreen from './screens/profile-screen';
import EditProfileScreen from './screens/edit-profile-screen';
import EditStatusScreen from './screens/edit-status-screen';
import CreateCommunityScreen from './screens/create-community-screen';
import { Provider } from 'react-redux';
import { Store } from './redux/store';
import Icon from 'react-native-vector-icons/FontAwesome'


const stack = createNativeStackNavigator();
const main = createBottomTabNavigator()

const MainScreens = () => (
    <main.Navigator screenOptions={{
        tabBarShowLabel:false,
        tabBarStyle: {height: 60, backgroundColor: "#004b67"}
        }}>
        <main.Screen
            name="Explore Screen"
            component={ExploreScreen}
            options={{
                headerShown: false, 
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', opacity: focused ? 1 : 0.5}}>
                        <Icon color= "#80f7e3" size={30} name="group"/>
                        <Text style= {{color:'#80f7e3'}}>Discover</Text>
                    </View>
                ) 
            }}
        />

        <main.Screen
            name="Veterinaries Screen"
            component={VeterinariesScreen}
            options={{ 
                headerShown: false, 
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', opacity: focused ? 1 : 0.5}}>
                        <Icon color= "#80f7e3" size={30} name="medkit"/>
                        <Text style= {{color:'#80f7e3'}}>Veterinary</Text>
                    </View>
                )
            }}
        />

        <main.Screen
            name="Pet Shops Screen"
            component={PetShopsScreen}
            options={{ 
                headerShown: false, 
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', opacity: focused ? 1 : 0.5}}>
                        <Icon color= "#80f7e3" size={30} name="paw"/>
                        <Text style= {{color:'#80f7e3'}}>Pet Shop</Text>
                    </View>
                )
            }}
        />
        
        <main.Screen
        name="Profile Screen"
        component={ProfileScreen}
        options={{ 
            headerShown: false, 
            tabBarIcon: ({focused}) => (
                <View style={{alignItems: 'center', opacity: focused ? 1 : 0.5}}>
                    <Icon color= "#80f7e3" size={30} name="user-circle"/>
                    <Text style= {{color:'#80f7e3'}}>Profile</Text>
                </View>
            )
    }}/> 
    </main.Navigator>
)

export default function NavigationScreens() {
  console.log("App Executed")
  return (
    <Provider store={Store}>
      <SafeAreaView style= {styles.AndroidSafeArea}>
        <NavigationContainer>
          
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
              component={MainScreens}
              options={{ title: '', headerShown: false }}
            />

            <stack.Screen
              name="Veterinaries"
              component={MainScreens}
              options={{ title: '', headerShown: false }}
            />      
            

            <stack.Screen
              name="Pet Shops"
              component={MainScreens}
              options={{ title: '', headerShown: false }}
            />
            
            <stack.Screen
              name="Notifications"
              component={NotificationsScreen}
              options={{ title: '', headerShown: false }}
            />
            
            <stack.Screen
              name="Profile"
              component={MainScreens}
              options={{ title: '', headerShown: false }}
            />
            
            <stack.Screen
              name="Edit Profile"
              component={EditProfileScreen}
              options={{ title: '', headerShown: false }}
            />
            
            <stack.Screen
              name="Edit Status"
              component={EditStatusScreen}
              options={{ title: '', headerShown: false }}
            />

            <stack.Screen
              name="Create Community"
              component={CreateCommunityScreen}
              options={{ title: '', headerShown: false }}
            />

          </stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}


const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex:1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

});
