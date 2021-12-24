import React from 'react'
import {  ImageBackground, StyleSheet, Text, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'

export default function InitialScreen({ navigation }) {
    return (
        <ImageBackground style={styles.cont} source={{ uri: "https://images.unsplash.com/photo-1618403088890-3d9ff6f4c8b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8amV3ZWxsZXJ5fGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60" }} >
            <View style={styles.cont}>
                <View style={styles.heading}>
                    <Text style={styles.text}>Darshan Jewellers</Text>
                    <Text style={styles.subtitle}>(ਖੁਰਦ ਵਾਲੇ)</Text>
                </View>
            </View>
            <Button style={styles.button} mode='contained' color="#EAEAEA"  onPress={() => navigation.navigate("Signin")} >Login</Button>
            <Button style={styles.button} mode='contained' color="#E2C275" onPress={() => navigation.navigate('Register')} >Register</Button>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    cont: {
        width: "100%",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    heading:{
        marginRight:100,
        marginBottom:400,
    },
    input: {
        width: '90%',
        backgroundColor: '#fff',
        elevation: 10,
        margin: 10,
        padding: 5,
        borderRadius: 5
    },
    registerView: {
        width: '100%',
        margin: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text: {
        fontFamily: "serif",
        fontSize: 28,
        color: "#fff"
    },
    subtitle:{
        fontSize:20,
        color: "#fff"
    },
    button:{
        padding:2,
        width:"80%",
        marginBottom:20,
        borderRadius:20,
        color:"#EAEAEA"
    }
})
