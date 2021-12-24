import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import auth from '@react-native-firebase/auth'
import Carousel from 'react-native-snap-carousel';


export default function WelcomeScreen() {
    return (
        <View style={styles.container}>
        <ScrollView style={styles.scroll}>
            <Text style={styles.title}>Darshan Jewellers </Text>
                <Text>(ਖੁਰਦ ਵਾਲੇ)</Text>
            {/* <Button onPress={()=>auth().signOut()}>Logout</Button> */}
            </ScrollView>
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
        fontSize: 16,
        color: "#f00"
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
        fontSize: 24,
        fontFamily: "serif",
        color: "#000",
        
    },
    subTitle: {
        fontSize: 12,
    },
    scroll:{
        marginTop:50
    }
})
