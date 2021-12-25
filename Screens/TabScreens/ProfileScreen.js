import React from 'react'
import {  StyleSheet, Text, View } from 'react-native'
import {
    Button
} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

export default function ProfileScreen({navigation}) {
    return (
        <View style={styles.container}>
        <Text style={styles.heading}>Profile</Text>
           <Button onPress={() => auth().signOut().then(navigation.replace('Splash'))}>Logout</Button>
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
    heading:{
        fontSize: 24,
        color: "#000",
        marginBottom: 12
    },
})
