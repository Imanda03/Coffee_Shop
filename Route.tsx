import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from './src/utils/color';
import HomeScreen from './src/screens/app/Home';
import FavouriteScreen from './src/screens/app/Favourite';
import ProfileScreen from './src/screens/app/Profile';
import ShopScreen from './src/screens/app/Shop';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './src/screens/auth/splash';
import Login from './src/screens/auth/signin';
import Register from './src/screens/auth/signup';
import {useWindowDimensions} from 'react-native';
import EditProfile from './src/components/EditProfile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const Tabs = () => {
  const {width, height} = useWindowDimensions();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'bookmark' : 'bookmark-outline';
          } else if (route.name === 'Shop') {
            iconName = focused ? 'bag' : 'bag-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-sharp' : 'person-outline';
          }

          return iconName ? (
            <Ionicons name={iconName} size={24} color={colors.BROWN} />
          ) : null;
        },
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {borderTopColor: colors.GRAY},
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Shop" component={ShopScreen} />
      <Tab.Screen name="Favorites" component={FavouriteScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      {/* <Tab.Screen name="Edit Your Profile" component={EditProfile} /> */}
    </Tab.Navigator>
  );
};

const Route = () => {
  const token: boolean = true;
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {token ? (
            <>
              <Stack.Screen
                name="Tabs"
                component={Tabs}
                options={{headerShown: false}}
              />
              <Stack.Screen name="ProfileStack" component={ProfileStack} />
              <Stack.Screen
                name="EditProfile"
                component={EditProfile}
                options={{headerShown: false}}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Splash"
                component={SplashScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Signin"
                component={Login}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Signup"
                component={Register}
                options={{headerShown: false}}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default React.memo(Route);
