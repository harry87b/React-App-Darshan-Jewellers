import React, { Component, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { LayoutAnimation, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigator } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './Screens/SignInScreen';
import RegisterScreen from './Screens/RegisterScreen';
import {initializeApp} from 'firebase/app';
import { firebaseConfig } from './firebase';




const Stack = createNativeStackNavigator();


export default function App() {
  const [ShowSplash, setShowSplash] = useState(true);
  useEffect(() => {

    async function ShowSplashScreen() {

      try {
        initializeApp(firebaseConfig);
        await new Promise(resolve => setTimeout(resolve, 5000));
      } catch (error) {
        console.log("something went Wrong" + error);

      } finally {
        setShowSplash(false);
      }
    }

    ShowSplashScreen();
  }, []);
  if (ShowSplash) {
    return (
      <View style={styles.splash}>
        <Icon name="diamond" size={50} />
        <Text style={styles.textStyle}>Darshan Jewellers</Text>
      </View>

    );
  }

  return (    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signin" screenOptions={{headerShown:false}} >
        <Stack.Screen name="Signin" component={SignInScreen} options={{ title: "Sign In" }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: "Register" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
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
});
