import React from 'react'
import {  StyleSheet, Text, View } from 'react-native'
import {
    Button
} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
        <Text style={styles.heading}>Profile</Text>
           <Button onPress={() => auth().signOut()}>Logout</Button>
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
    heading:{
        fontSize: 24,
        color: "#000",
        marginBottom: 12
    },
    textStyle: {
        padding:'1%',
        fontSize: 14,
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
