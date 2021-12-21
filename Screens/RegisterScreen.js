import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import auth from '@react-native-firebase/auth'
export default function RegisterScreen({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const register = () => {
        auth().createUserWithEmailAndPassword(email, password)
            .then((res) => {
                navigation.replace("Home")
                console.log(res, "User created ")
            })
            .catch((e)=>alert(e.message))
    }
    return (
        <View style={styles.cont}>
            <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://www.freepnglogos.com/uploads/diamond-png/diamond-gemstone-black-icon-transparent-png-svg-vector-37.png' }} />
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
            <Button mode="contained" onPress={register} disabled={!email || !password}>
                Register
            </Button>
            <View style={styles.registerView}>
                <Text >Already a  User ....?</Text>
                <Button mode="text" labelStyle={{ textTransform: 'capitalize' }} onPress={() => navigation.navigate('Signin')}>
                    Login
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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
    }
})
