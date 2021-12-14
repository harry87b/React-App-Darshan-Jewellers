import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, StatusBar, TouchableOpacity, Image, PixelRatio } from 'react-native';
import { getAuth, signinWithEmailAndPassword } from "firebase/auth";
import {db } from 'firebase';
import { auth } from '../firebase';

export default function SignInScreen({navigation}) {


    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    function signInUser() {
        console.log("Data on Button Click:"+ email +"" + password);
        auth.signInWithEmailAndPassword(email, password).then((user) => {
            console.log("user signed in" + user)
        })
        

    }

    function navigateToRegister() {
        navigation.navigate("Register");


    }



    return (        
            <View style={styles.container}>
            
                <View>
                <Image style={{width:150,height:150}} source={{ uri: 'https://cdn.discordapp.com/attachments/869420211101634560/904335279429648444/cropped-unnamed-2.png' }} />
                </View>

                <StatusBar style="auto" />
                <View style={styles.inputView}>
                    <TextInput style={styles.TextInput} placeholder="Email-Id" placeholderTextColor="#000" value={email} onChangeText={setEmail}></TextInput>
                </View>
                <View style={styles.inputView}>
                <TextInput style={styles.TextInput} placeholder="Password" placeholderTextColor="#000" secureTextEntry value={password} onChangeText={setpassword}></TextInput>
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgot_button}>Forgot Password?</Text>
                </TouchableOpacity>
            <TouchableOpacity onPress={navigateToRegister}>
                    <Text style={styles.newUser}>New User? Register Here</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn} onPress={signInUser}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
            </View>



    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        backgroundColor:"#000",
        
    },
    newUser: {
        height: 30,
        marginBottom: 25,
        color: "#000",
    },

    inputView: {
        backgroundColor: "pink",
        borderRadius: 30,
        width: "70%",
        height: 55,
        marginBottom: 23,
        alignItems: "center",
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        color: "#000"

    },
    forgot_button: {
        height: 30,
        marginBottom: 30,
        color: "#000",
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",        
        backgroundColor: "#FF1493",
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
});