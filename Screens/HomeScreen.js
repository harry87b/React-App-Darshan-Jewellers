import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from './TabScreens/WelcomeScreen';
import auth from '@react-native-firebase/auth';
import AboutUsScreen from './TabScreens/AboutUsScreen'
import ProductsScreen from './TabScreens/ProductsScreen'
import ProfileScreen from './TabScreens/ProfileScreen'


const Tab = createBottomTabNavigator();

export default function HomeScreen() {
    console.log(auth().currentUser)
    return (
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name="Welcome" component={WelcomeScreen} />
            <Tab.Screen name="About" component={AboutUsScreen} />
            <Tab.Screen name="Products" component={ProductsScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}

