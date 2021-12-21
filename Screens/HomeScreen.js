import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from './TabScreens/WelcomeScreen';
import auth from '@react-native-firebase/auth';

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
    console.log(auth().currentUser)
    return (
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name="Welcome" component={WelcomeScreen} />
        </Tab.Navigator>
    )
}

