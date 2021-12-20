import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Chain from '../DrawerScreens/Chain';

const Drawer = createDrawerNavigator();
export default function ProductsScreen() {
    return (
        //    <Drawer.Navigator drawerContent={props=><DrawerContent {...props}/>}
        // initialRouteName='Welcome'>
        //     <Drawer.Screen name="Chain" component={Chain} />
        // </Drawer.Navigator>
        <View style={styles.container}>
            <Text style={styles.textStyle}>
                Products
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    splash: {
        flex: 1,
        // Make the backgroud as a gradient color
        backgroundColor: '#aed',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 24,
        color: "#000",
        marginBottom: 12
    },
    myBackground: {
        backgroundColor: '#fae',
        fontSize: 24,
        marginBottom: 20
    },
    image: {
        width: 300,
        height: 200,
        marginBottom: 20
    },
    item: {
        backgroundColor: "#fff",
        padding: 16,
        margin: 12
    },
    title: {
        fontSize: 16,
        color: "#f00"
    },
    subTitle: {
        fontSize: 12,
    }
})
