import React, { useEffect } from 'react'
import auth from '@react-native-firebase/auth';
import LottieView from 'lottie-react-native';
import { Text } from 'react-native';
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
            //<LottieView source={require('../assets/Animation/12147-diamond-anyjson.json')} autoPlay loop />
            <Text>Hello Splash</Text>
    )
}

export default SplashScreen
