import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import auth from '@react-native-firebase/auth';

const SplashScreen = ({navigation}) => {

   useEffect(() => {
       auth().onAuthStateChanged((user)=>
       {
           if(user){
               navigation.replace('Home')
           }
           else{
               navigation.replace('Signin')
           }
       })
   }, [navigation])
    return (
        <View style={styles.cont}>
            <Image style={{ width: 200, height: 200 }} source={{ uri: 'https://www.freepnglogos.com/uploads/diamond-png/diamond-gemstone-black-icon-transparent-png-svg-vector-37.png' }} />
            <Text>Darshan Jewellers</Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    cont:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
