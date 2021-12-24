import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from './TabScreens/WelcomeScreen';
import auth from '@react-native-firebase/auth';
import AboutUsScreen from './TabScreens/AboutUsScreen'
import ProductsScreen from './TabScreens/ProductsScreen'
import ProfileScreen from './TabScreens/ProfileScreen'
// import Icon from 'react-native-ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';


const Tab = createBottomTabNavigator();

export default function HomeScreen() {
    console.log(auth().currentUser)
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} >
            <Tab.Screen name="Home" component={WelcomeScreen} options={{
                tabBarIcon: ({ size, color }) => (<Icon name={"home"} color={'#000'} size={20} />)
            }}/>
            <Tab.Screen name="About" component={AboutUsScreen} options={{
                tabBarIcon: ({ size, color }) => (<Icon name={"info"} color={'#000'} size={20} />)
            }}  />
            <Tab.Screen name="Products" component={ProductsScreen} options={{
                tabBarIcon: ({ size, color }) => (<Icon name={"diamond"} color={'#000'} size={20} />)
            }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarIcon: ({ size, color }) => (<Icon name={"user-circle"} color={'#000'} size={20} />)
            }} />
        </Tab.Navigator>
    )
}

