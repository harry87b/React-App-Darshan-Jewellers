import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductsScreen from './TabScreens/ProductsScreen';
import AboutUsScreen from './TabScreens/AboutUsScreen';
import WelcomeScreen from './TabScreens/WelcomeScreen';
import ProfileScreen from './TabScreens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
    return (
        // <Drawer.Navigator drawerContent={props=><DrawerContent {...props}/>}
        // initialRouteName='Welcome'>
        //     <Drawer.Screen name="AboutUs" component={AboutUsScreen} />
        //     <Drawer.Screen name="Products" component={ProductsScreen} />
        //     <Drawer.Screen name="Welcome" component={WelcomeScreen} />
        // </Drawer.Navigator>
        <Tab.Navigator>
            <Tab.Screen name="Welcome" component={WelcomeScreen} />
            <Tab.Screen name="Products" component={ProductsScreen} />
            <Tab.Screen name="AboutUs" component={AboutUsScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})
