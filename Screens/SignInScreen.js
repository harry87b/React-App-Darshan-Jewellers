import auth from '@react-native-firebase/auth'
import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function SignInScreen({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login=()=>
    {
        auth().signInWithEmailAndPassword(email,password)
        .then((res)=>
        {
            navigation.replace("Home")
            console.log(res,"User logged in")
        })
        .catch(()=>{
            alert("Invalid Credentials")
        })
    }
    return (
        <ImageBackground source={{ uri: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8amV3ZWxyeXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60" }} style={styles.cont}>
        <View style={styles.cont}>
            {/* <Image style={{width:100,height:100}} source={{ uri:'https://www.freepnglogos.com/uploads/diamond-png/diamond-gemstone-black-icon-transparent-png-svg-vector-37.png'}}/> */}
                <Text style={styles.title}>DARSHAN JEWELLERS</Text>
            <TextInput
                style={styles.input}
                label="Email"
                underlineColor='tranparent'
                dense
                onChangeText={(e) => setEmail(e)}
            />
            <TextInput
                label="Password"
                style={styles.input}
                underlineColor='tranparent'
                dense
                onChangeText={(e) => setPassword(e)}
            />
                <Button style={styles.button} mode="contained" color="#E1701A" onPress={login} disabled={!email || !password}>
                Login
            </Button>
            <View style={styles.registerView}>
                <Text style={styles.text}>Not a User ?</Text>
                    <Button mode="text" color="#FFF200" labelStyle={{textTransform:'capitalize'}} onPress={()=>navigation.navigate('Register')}>
                    Register here
                </Button>
            </View>
        </View>
        </ImageBackground>
        
    )
}

const styles = StyleSheet.create({
    cont:{
        width:"100%",
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        color:'#fff',
        fontSize: 18,
    },
    title:{
        fontSize:24,
        padding:20,
        color: '#fff'

    },
    input: {
        width: '80%',
        backgroundColor: '#fff',
        elevation: 10,
        margin: 10,        
        borderRadius:30,
        padding: 5,
        
    },
    registerView:{
        width:'100%',
        margin:20,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center'
    },
    button:{
        color: "#EAEAEA",
        borderRadius:10

    }
})
