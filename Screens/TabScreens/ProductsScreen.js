import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ItemList from '../DrawerScreens/ItemList';
import DrawerContent from '../DrawerContent';
const Drawer = createDrawerNavigator();

export default function ProductsScreen(props) {
    return (
        <Drawer.Navigator 
        screenOptions={{
            drawerStyle: {
            backgroundColor: '#fff',
            width: 180,
            },
            }}
        drawerContent={props => <DrawerContent {...props} />} 
        initialRouteName='Welcome' >
            <Drawer.Screen name="Item"  component={ItemList} />
        </Drawer.Navigator>
    )
}